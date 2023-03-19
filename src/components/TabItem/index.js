import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, clickTabItem} = props
  const {displayText} = tabDetails

  const onClickTab = () => {
    clickTabItem(tabDetails.tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={onClickTab}
        className={`tab-btn ${isActive ? 'active-tab-btn' : ''}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
