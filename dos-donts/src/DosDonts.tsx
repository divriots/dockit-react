import React, { ReactNode } from 'react';

const styles = {
  container: {
    borderRadius: '.25rem',
    overflow: 'hidden'
  },
  componentContainer: {
    backgroundColor: '#00000010',
    width: '100%',
    padding: '3rem 0',
    display: 'flex',
    justifyContent: 'center',
    alignIntems: 'center',
  },
  instructionsContainer: {
    borderTopWidth: '.2rem',
    borderTopStyle: 'solid',
    padding: '1.5rem'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    marginLeft: '.5rem',
  },
  instructionsWrapper: {
    marginTop: '1rem',
  },
  button: {
    backgroundColor: '#00000030',
    padding: '.5rem',
    fontWeight: 600,
    borderRadius: '.25rem',
  }
}

type IconProps = {
  width?: string,
  height?: string,
  color?: string,
}

const CheckCircle = ({ width = '24px', height = '24px', color = '#36B37E' }: IconProps) => (
  <svg
    style={{ width, height }}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
    />
  </svg>
);

const CloseOctagon = ({ width = '24px', height = '24px', color = '#FF6347' }: IconProps) => (
  <svg
    style={{ width, height }}
    viewBox="0 0 24 24"
  >
    <path
      fill={color}
      d="M8.27,3L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27L15.73,3M8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41"
    />
  </svg>
);

type CardProps = {
  /**
   * Icon to be shown as indicator
   */
  Icon?: ReactNode,
  /**
   * Color to be used as theme from the card. A transparency will be added to use as background color as well.
   */
  color: string,
  /**
   * The label, e.g. "DO", "DON'T"
   */
  label: string,
  /**
   * The instructions to show: use array for bullet list or string for paragraph.
   */
  instructions?: string[] | string,
  /**
   * The sample component to display.
   */
  Component?: ReactNode,
}

export const InstructionsCard = ({ Icon, color, Component, label, instructions }: CardProps) => (
  <div style={styles.container}>
    {!!Component && (
      <div style={styles.componentContainer}>
        <Component />
      </div>
    )}
    <div
      style={{
        ...styles.instructionsContainer,
        backgroundColor: `${color.substring(0, 7)}30`,
        borderTopColor: color,
      }}
    >
      <div style={styles.titleContainer}>
        {!!Icon && <Icon />}
        <span style={styles.title}>{label}</span>
      </div>
      {!!instructions && <div style={styles.instructionsWrapper}>
        {Array.isArray(instructions)
          ? <ul>{instructions.map(instruction => <li key={instruction}>{instruction}</li>)}</ul>
          : <p>{instructions}</p>
        }
      </div>
      }
    </div>
  </div>
);

/**
 * Component to render general instructions or for a specific component.
 */
export const Dos = ({ Icon, color = '#36B37E', label = 'DO', Component, instructions }: CardProps) => (
  <InstructionsCard
    Component={Component}
    Icon={() => !!Icon ? <Icon /> : <CheckCircle color={color} />}
    color={color}
    label={label}
    instructions={instructions}
  />
);

/**
 * Component to render general restrictions or for a specific component.
 */
export const Donts = ({ Icon, color = '#DE350B', label = "DON'T", Component, instructions }: CardProps) => (
  <InstructionsCard
    Component={Component}
    Icon={() => !!Icon ? <Icon /> : <CloseOctagon color={color} />}
    color={color}
    label={label}
    instructions={instructions}
  />
);

export const SampleButton = () => <div style={styles.button}>SAMPLE BUTTON</div>