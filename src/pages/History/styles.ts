import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 5.6rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.4rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 3.6rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${(props) => props.theme['gray-600']};
      padding: 1.6rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 1.4rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 2.4rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 2.4rem;
      }
    }

    td {
      background: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1.6rem;
      font-size: 1.4rem;
      line-height: 1.6;

      &:first-child {
        padding-left: 2.4rem;
        width: 50%;
      }

      &:last-child {
        padding-right: 2.4rem;
      }
    }
  }
`

const STATUS_VARIANT = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  variant: keyof typeof STATUS_VARIANT
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
    background: ${(props) => props.theme[STATUS_VARIANT[props.variant]]};
  }
`
