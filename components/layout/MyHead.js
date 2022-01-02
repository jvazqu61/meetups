import Head from 'next/head';

function MyHead(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
        </Head>
    )
}

export default MyHead;
