function ContentList({ items, getIcon }) {
  return (
    <ul className="flex gap-8 flex-wrap">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <img 
            src={getIcon(item)} 
            alt={item} 
            className="w-6 h-6 object-contain"
            onError={(e) => { e.target.style.display = 'none' }} 
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default ContentList;