let pyodidePromise;
const runner = `
import contextlib, io, traceback
scope = {"__builtins__": __builtins__}
stream = io.StringIO()
result = {"ok": False, "output": "", "error": ""}
try:
    with contextlib.redirect_stdout(stream):
        exec(USER_CODE, scope)
    output = stream.getvalue().strip()
    with contextlib.redirect_stdout(io.StringIO()):
        exec(TEST_CODE, {"scope": scope, "output": output, "user_code": USER_CODE, "contextlib": contextlib, "io": io})
    result = {"ok": True, "output": output, "error": ""}
except AssertionError as error:
    result = {"ok": False, "output": stream.getvalue().strip(), "error": str(error) or "Проверь решение"}
except Exception as error:
    result = {"ok": False, "output": stream.getvalue().strip(), "error": f"{type(error).__name__}: {error}"}
result
`;
self.onmessage = async ({ data }) => {
  if (data.type !== 'run') return;
  try {
    if (!pyodidePromise) {
      importScripts('https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js');
      pyodidePromise = loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/' });
    }
    const pyodide = await pyodidePromise;
    pyodide.globals.set('USER_CODE', data.code);
    pyodide.globals.set('TEST_CODE', data.test);
    const result = pyodide.runPython(runner).toJs({ dict_converter: Object.fromEntries });
    self.postMessage({ id: data.id, ...result });
  } catch (error) {
    self.postMessage({ id: data.id, ok: false, output: '', error: String(error) });
  }
};
