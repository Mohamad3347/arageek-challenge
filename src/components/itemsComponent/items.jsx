const ItemsComponent = ({ photo: { id, name, url, description } }) => {
  return (
      <div className="item-container" key={id}>
          <img src={ ` ${url}`} alt={` ${description}`} />
          <button>Download</button>
      <h4>{name}</h4>
    </div>
  );
};

export default ItemsComponent;
