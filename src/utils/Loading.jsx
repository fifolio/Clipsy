const loading = 'https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif';

export default function Loading() {
    return (
        <div
            style={{
                background: 'white',
                // textAlign: 'center',
                width: '100%',
                height: '100%',
                marginTop: '100px',
                padding: '0'
            }}
        >
            <center>
                <img src={loading} width="100px" />
            </center>
        </div>
    )
}