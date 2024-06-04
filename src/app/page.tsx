import Markdown from 'react-markdown';
import README from '/README.md';
import MarkDown from '../../documents/MarkDown.md';

const MainPage = () => (
  <div className='markdown'>
    {/* <Markdown>{README}</Markdown> */}
    <Markdown>{README}</Markdown>
  </div>
);

export default MainPage;
