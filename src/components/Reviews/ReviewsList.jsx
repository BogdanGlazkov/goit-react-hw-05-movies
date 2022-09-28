import { List, ListItem, Text } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
    const elements = reviews.map(({ content, id, author }) => (

        <ListItem key={id}>
            <h3>Author: {author}</h3>
            <Text>{content}</Text>
        </ListItem>));
    
    return (
        <List>
            {elements}
        </List>
    );
};