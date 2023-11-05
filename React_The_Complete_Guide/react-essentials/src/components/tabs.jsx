export default function Tabs({
  children,
  buttons,
  ButtonsContainerName = "ul",
}) {
  return (
    <>
      <ButtonsContainerName>{buttons}</ButtonsContainerName>
      {children}
    </>
  )
}
