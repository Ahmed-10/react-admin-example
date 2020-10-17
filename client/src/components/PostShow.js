import * as React from "react";
import { Show, SimpleShowLayout, TextField, DateField, RichTextField } from 'react-admin';

const PostShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <RichTextField source="body" />
            <DateField label="Publication date" source="publishedAt" />
        </SimpleShowLayout>
    </Show>
);

export default PostShow;
