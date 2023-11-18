import { Label, Input } from "./StyledComps"

export default function InputGroup({ label, invalid, ...props }) {
  return (
    <p>
      <Label $invalid={invalid}>{label}</Label>
      <Input $invalid={invalid} {...props} />
    </p>
  )
}
