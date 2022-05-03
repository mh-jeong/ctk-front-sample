import Select from "react-select";

const options = [
  { value: "1", label: "Data 1" },
  { value: "2", label: "Data 2" },
  { value: "3", label: "Data 3" },
];

const CommonSelect = () => {
  return <Select options={options} />;
};

export default CommonSelect;
