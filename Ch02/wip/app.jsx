(() => {
  const SizeSelector = (props) => (
    <div className="field-group">
      <label htmlFor="size-options">Size:</label>
      <select defaultValue={props.size} name="sizeOptions" id="size-options">
        {window.Inventory.allSizes.map((num) => (
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

  const ProductCustomizer = () => (
    <div className="customizer">
      <div className="product-image">
        <ProductImage color="red" />
      </div>
      <div className="selectors">
        <SizeSelector size={8} />
      </div>
    </div>
  );

  const root = ReactDOMClient.createRoot(document.getElementById("react-root"));
  root.render(<ProductCustomizer />);
})();
