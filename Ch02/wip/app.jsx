(() => {
  const SizeSelector = ({ size, sizes }) => (
    <div className="field-group">
      <label htmlFor="size-options">Size:</label>
      <select defaultValue={size} name="sizeOptions" id="size-options">
        {sizes.map((num) => (
          <option values={num} key={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );

  const ColorSelector = ({ color, colors }) => (
    <div className="field-group">
      <label htmlFor="color-options">Cize:</label>
      <select defaultValue={color} name="colorOptions" id="color-options">
        {colors.map((name) => (
          <option values={name} key={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );

  const ProductImage = ({ color }) => (
    <img src={`../../assets/${color}.jpg`} alt={`A ${color} sneaker`} />
  );

  const ProductCustomizer = () => {
    const [size, setSize] = React.useState(8);
    const [sizes, setSizes] = React.useState(window.Inventory.allSizes);
    const [color, setColor] = React.useState("red");
    const [colors, setColors] = React.useState(window.Inventory.allColors);

    return (
      <div className="customizer">
        <div className="product-image">
          <ProductImage color={color} />
        </div>
        <div className="selectors">
          <SizeSelector size={size} sizes={sizes} />
          <ColorSelector color={color} colors={colors} />
        </div>
      </div>
    );
  };

  const root = ReactDOMClient.createRoot(document.getElementById("react-root"));
  root.render(<ProductCustomizer />);
})();
