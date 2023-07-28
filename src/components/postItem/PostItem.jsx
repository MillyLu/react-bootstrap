import '../../custom.scss';

export function PostItem({ id, title, description }) {
  return (
    <tr className="item">
      <td className="item_id">{id}</td>
      <td className="item_title">{title}</td>
      <td className="item_body">{description}</td>
    </tr>
  );
}
