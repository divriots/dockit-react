import React, { useState } from 'react';
import { Caption } from '~/caption';

const styles = {
	transitionsWrapper: {
		display: 'flex',
		flexDirection: 'column',
	},
	transitionsBox: {
		cursor: 'pointer',
		height: '6rem',
		width: '13rem',
		padding: '.5rem',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px solid #FFF',
		borderRadius: '0.375rem',
		boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
		backgroundColor: '#6366F1',
	},
};

const TransitionBox = ({ value }: { value: string, key: any }) => {
	const [pressed, setPressed] = useState(false);
	return (
		<div
			onClick={() => setPressed(!pressed)}
			style={{
				...styles.transitionsBox,
				transition: `all ${value} ease 0s`,
				marginLeft: `${pressed ? 20 : 0}rem`
			}}
		>
			<Caption text={value} style={{ color: '#fff' }} />
		</div>
	);
};

export const TransitionShowcases = ({ values }) => (
	<div style={styles.transitionsWrapper}>
		{
			values.map((value) => <TransitionBox key={value} value={value} />)
		}
	</div>
);