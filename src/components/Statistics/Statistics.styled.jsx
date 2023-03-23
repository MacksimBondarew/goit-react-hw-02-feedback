import styled from 'styled-components';

export const ListStatic = styled.ul`
    list-style-type: none;
    justify-content: center;
    display: flex;
`;
export const ItemStatic = styled.li`
    font-size: 18px;
    font-weight: 500;
    color: white;
    margin-right: 30px;
    &:last-child {
        margin-right: 0px;
    }
`;
export const SpanItemStatic = styled.span`
    color: #FF8C00;
`