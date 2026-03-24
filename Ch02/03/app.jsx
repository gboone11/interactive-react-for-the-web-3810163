(() => {
  const ProductImage = () => <img src="../../assets/red.jpg" alt="A red sneaker" />;

  const ProductCustomizer = () => {
    return (
      <div className="customizer">
        <div className="product-image">
          <ProductImage />
        </div>
      </div>
    );
  };

  const root = ReactDOMClient.createRoot(document.getElementById("react-root"));
  root.render(<ProductCustomizer />);
})();
