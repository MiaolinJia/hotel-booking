function MainNavigationPopupItem({
  text,
  isOpen,
  handleClick,
  children,
}: {
  text: string;
  isOpen: boolean;
  handleClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="help-container">
      <li onClick={handleClick}>
        <button>{text}</button>
      </li>
      {isOpen && <div className="popup">{children}</div>}
    </div>
  );
}

export default MainNavigationPopupItem;
