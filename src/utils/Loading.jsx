import loading from '../assets/loading.gif'

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