export default function guardrail(mathFunc) {
  const ret = [];
  try {
    const res = mathFunc();
    ret.push(res, 'Guardrail was processed');
  } catch (err) {
    ret.push(err.toString(), 'Guardrail was processed');
  }
  return ret;
}
