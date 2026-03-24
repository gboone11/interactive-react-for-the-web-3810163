(() => {
  const SizeSelector = (props) => (
    <div className="field-group">
      <label htmlFor="size-options">Size:</label>
      <select defaultValue={props.size} name="sizeOptions" id="size-options">
        {props.sizes.map((num) => (
          <option values={num} key={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );

  const ProductImage = (props) => (
    <img src={`../../assets/${props.color}.jpg`} alt={`A ${props.color} sneaker`} />
  );

  const ProductCustomizer = () => {
    const [size, setSize] = React.useState(8);
    const [sizes, setSizes] = React.useState(window.Inventory.allSizes);
    const [color, setColor] = React.useState("red");

    return (
      <div className="customizer">
        <div className="product-image">
          <ProductImage color={color} />
        </div>
        <div className="selectors">
          <SizeSelector size={size} sizes={sizes} />
        </div>
      </div>
    );
  };

  const root = ReactDOMClient.createRoot(document.getElementById("react-root"));
  root.render(<ProductCustomizer />);
})();
