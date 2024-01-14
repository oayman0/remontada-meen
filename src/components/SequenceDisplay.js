const SequenceDisplay = ({ values }) => (
  <div>
    <ol className="answers">
      {values.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </ol>
  </div>
);

export default SequenceDisplay;
