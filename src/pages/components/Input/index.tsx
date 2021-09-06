import React from 'react';
import _ from '../../../@lodash';
import TextField from '@material-ui/core/TextField';
import { withFormsy } from 'formsy-react';

function TextFieldFormsy(props: any) {
	const importedProps = _.pick(props, [
		'autoComplete',
		'autoFocus',
		'children',
		'className',
		'defaultValue',
		'disabled',
		'FormHelperTextProps',
		'fullWidth',
		'id',
		'InputLabelProps',
		'inputProps',
		'InputProps',
		'inputRef',
		'label',
		'multiline',
		'name',
		'onBlur',
		'onChange',
		'onFocus',
		'placeholder',
		'required',
		'rows',
		'rowsMax',
		'select',
		'SelectProps',
		'type',
		'variant',
		'color'
	]);

	const { errorMessage } = props;
	const value = props.value || '';

	function changeValue(event: any) {
		props.setValue(event.currentTarget.value);
		if (props.onChange) {
			props.onChange(event);
		}
		if (props.onBlur) {
			props.onBlur(event);
		}
	}

	return (
		<TextField
			{...importedProps}
			onChange={changeValue}
			value={value}
			error={Boolean((!props.isPristine && props.showRequired) || errorMessage)}
			helperText={errorMessage}
		/>
	);
}

export default React.memo(withFormsy(TextFieldFormsy));