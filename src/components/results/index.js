import './results.scss';

const Results = (props) => {
  // const { data } = props;
  return (
    <section>
      <pre>{props.results ? JSON.stringify(props.results, undefined, 2) : null}</pre>
    </section>
  );
}

export default Results;
