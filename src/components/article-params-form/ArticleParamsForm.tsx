import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { SyntheticEvent, useRef, useState } from 'react';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import clsx from 'clsx';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';
import {
	ArticleStateType,
	OptionType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Text } from '../text';

type ArticleParamsFormProps = {
	currentArticleState: ArticleStateType;
	setCurrentArticleState: (params: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	currentArticleState,
	setCurrentArticleState,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const onClick = () => setIsOpen(!isOpen);
	const rootRef = useRef<HTMLDivElement>(null);
	const [newFontColor, setNewFontColor] = useState<OptionType>(
		currentArticleState.fontColor
	);
	const [newFontFamilyOption, setNewFontFamilyOption] = useState<OptionType>(
		currentArticleState.fontFamilyOption
	);
	const [newBackgroundColor, setNewBackgroundColor] = useState<OptionType>(
		currentArticleState.backgroundColor
	);
	const [newContentWidth, setNewContentWidth] = useState<OptionType>(
		currentArticleState.contentWidth
	);
	const [newFontSizeOption, setNewFontSizeOption] = useState<OptionType>(
		currentArticleState.fontSizeOption
	);

	useOutsideClickClose({
		isOpen,
		rootRef,
		onClose: onClick,
		onChange: setIsOpen,
	});

	const handleSubmitForm = (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();

		setCurrentArticleState({
			// ...currentArticleState,
			fontColor: newFontColor,
			fontFamilyOption: newFontFamilyOption,
			backgroundColor: newBackgroundColor,
			contentWidth: newContentWidth,
			fontSizeOption: newFontSizeOption,
		});
	};

	const handleReset = () => {
		setCurrentArticleState(defaultArticleState);
	};

	return (
		<div ref={rootRef}>
			<ArrowButton isOpen={isOpen} onClick={onClick} />

			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form onSubmit={handleSubmitForm} className={styles.form}>
					<Text as='h1' size={31} weight={800} uppercase>
						задайте параметры
					</Text>
					<Select
						placeholder={newFontFamilyOption.value}
						selected={newFontFamilyOption}
						onChange={setNewFontFamilyOption}
						options={fontFamilyOptions}
						title='Шрифт'
					/>

					<RadioGroup
						selected={newFontSizeOption}
						name='radio'
						onChange={setNewFontSizeOption}
						options={fontSizeOptions}
						title='Размер шрифта'
					/>

					<Select
						placeholder={newFontColor.value}
						selected={newFontColor}
						onChange={setNewFontColor}
						options={fontColors}
						title='Цвет шрифта'
					/>

					<Separator />

					<Select
						placeholder={newBackgroundColor.value}
						selected={newBackgroundColor}
						onChange={setNewBackgroundColor}
						options={backgroundColors}
						title='Цвет фона'
					/>

					<Select
						placeholder={newContentWidth.value}
						selected={newContentWidth}
						onChange={setNewContentWidth}
						options={contentWidthArr}
						title='Ширина контента'
					/>

					<div className={styles.bottomContainer}>
						<Button onClick={handleReset} title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
