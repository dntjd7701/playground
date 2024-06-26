import data from '@/components/Accordian/data';

const Accordion1 = () => {
  return <div>
    {data.map(d => {
      return <div>
        <h1>{d.title}</h1>
      </div>
    })}
  </div>;
};
export default Accordion1;
