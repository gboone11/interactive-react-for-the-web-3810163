(() => {
  const SizeSelector = () => (
    <div className="field-group">
      <label htmlFor="size-options">Size:</label>
      <select name="sizeOptions" id="size-options">
        {window.Inventory.allSizes.map((num) => (
          <option values={num} key={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );

  const ProductImage = () => <img src="../../assets/red.jpg" alt="A red sneaker" />;

  const ProductCustomizer = () => (
    <div className="customizer">
      <div className="product-image">
        <ProductImage />
      </div>
      <div className="selectors">
        <SizeSelector />
      </div>
    </div>
  );

  const root = ReactDOMClient.createRoot(document.getElementById("react-root"));
  root.render(<ProductCustomizer />);
})();
