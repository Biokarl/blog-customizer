import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

const options = [
	{ title: '1 опция', value: '1 опция', className: '' },
	{ title: '2 опция', value: '2 опция', className: '' },
	{ title: '3 опция', value: '3 опция', className: '' },
	{ title: '4 опция', value: '4 опция', className: '' },
];

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(options[0]);
	const onClick = () => setIsOpen(!isOpen);

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={onClick} />

			<aside
				className={`${styles.container} ${isOpen && styles.container_open} ${
					styles.form
				}`}>
				<form className={styles.form}>
					<Select
						selected={selected}
						onChange={setSelected}
						options={options}
						title='Шрифт'
					/>

					<RadioGroup
						selected={selected}
						name='radio'
						onChange={setSelected}
						options={options}
						title='Размер шрифта'
					/>

					<Select
						selected={selected}
						onChange={setSelected}
						options={options}
						title='Цвет шрифта'
					/>

					<Separator />

					<Select
						selected={selected}
						onChange={setSelected}
						options={options}
						title='Цвет фона'
					/>

					<Select
						selected={selected}
						onChange={setSelected}
						options={options}
						title='Ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button onClick={onClick} title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
