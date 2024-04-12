import Button from "./Button";

export default function BootstrapButton() {
  return (
    <div className="App">
      <Button text="primary outline" type="primary" mode="outline" />
      <Button text="secondary solid" type="warning" mode="text" />
      <Button text="primary solid" type="primary" mode="solid" />
      <Button text="danger text" type="danger" mode="text" />
    </div>
  );
}
