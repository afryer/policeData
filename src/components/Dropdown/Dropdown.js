import PropTypes from 'prop-types';


const Dropdown =(props)=> {

	const option = props.options

	return (
		<>
		<label htmlFor="cars">Choose a force:</label>
			<select name="cars" id="cars">
				{option.map((item) => {
					return <option value={item.id}>{ item.name}</option>
				})}
			</select>

		</>
	)
}

Dropdown.propTypes = {
  id: PropTypes.string,
  name : PropTypes.string,
};

export default Dropdown;