export default function ResumePage() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <iframe
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/berkozcan-cv.pdf`}
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Berk Özcan's Resume"
            />
        </div>
    );
}