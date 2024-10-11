
function MainNavigationPopupItem({ className, text, handleClick}: { className: string, text: string, handleClick: () => void }) {
    return (
        <li className={className} onClick={()=>handleClick()}>
            <button>{text}</button>
        </li>
    )
}

export default MainNavigationPopupItem;