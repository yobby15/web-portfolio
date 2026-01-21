import ContentList from './ContentList';
import TitleContent from './TitleContent';

function ContentCard({ title, items, getIcon }) {
  return (
    <div className="mb-8 p-4 border rounded-lg shadow-sm">
      <TitleContent title={title} />
      <div className="mt-4">
        <ContentList items={items} getIcon={getIcon} />
      </div>
    </div>
  )
}

export default ContentCard;