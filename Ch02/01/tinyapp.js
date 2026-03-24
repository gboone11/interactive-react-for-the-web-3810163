(() => {
  const productCustomizer = React.createElement(
    "div",
    { className: "customizer" },
    "Product Customizer will go here",
  );

  const root = ReactDOMClient.createRoot(document.getElementById("react-root"));
	root.render(productCustomizer)
})();
