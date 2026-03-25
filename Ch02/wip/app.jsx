(() => {
  const SizeSelector = ({ size, sizes, handleSizeChange }) => {
    const onSizeChange = (event) => {
      handleSizeChange(event.target.value);
    };

    return (
      <div className="field-group">
        <label htmlFor="size-options">Size:</label>
        <select defaultValue={size} name="sizeOptions" id="size-options" onChange={onSizeChange}>
          {sizes.map((num) => (
            <option values={num} key={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const ColorSelector = ({ color, colors, handleColorChange }) => {
    const onColorChange = (event) => {
      handleColorChange(event.target.value);
    };

    return (
      <div className="field-group">
        <label htmlFor="color-options">Color:</label>
        <select
          defaultValue={color}
          name="colorOptions"
          id="color-options"
          onChange={onColorChange}
        >
          {colors.map((name) => (
            <option values={name} key={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const ProductImage = ({ color }) => (
    <img src={`../../assets/${color}.jpg`} alt={`A ${color} sneaker`} />
  );

  const ProductCustomizer = () => {
    const [size, setSize] = React.useState(8);
    const [sizes, setSizes] = React.useState(window.Inventory.allSizes);
    
    const [color, setColor] = React.useState("red");
    const [colors, setColors] = React.useState(window.Inventory.allColors);

    const handleSizeChange = (selectedSize) => {
      const availableColors = window.Inventory.bySize[selectedSize];
      setColors(availableColors);
      setSize(selectedSize);

      if (availableColors.indexOf(color) === -1) {
        setColor(availableColors[0]);
      }
    };

    const handleColorChange = (selectedColor) => {
      const availableSizes = window.Inventory.byColor[selectedColor];
      setSizes(availableSizes);
      setColor(selectedColor);

      if (availableSizes.indexOf(size) === -1) {
        setSize(availableSizes[0]);
      }
    };

    return (
      <div className="customizer">
        <div className="product-image">
          <ProductImage color={color} />
        </div>
        <div className="selectors">
          <SizeSelector size={size} sizes={sizes} handleSizeChange={handleSizeChange} />
          <ColorSelector color={color} colors={colors} handleColorChange={handleColorChange} />
        </div>
      </div>
    );
  };

  const root = ReactDOMClient.createRoot(document.getElementById("react-root"));
  root.render(<ProductCustomizer />);
})();
