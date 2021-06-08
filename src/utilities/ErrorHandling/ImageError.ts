class ImageApiError extends Error {

    constructor(message: string, status: number) {
        super();
        this.message = message;
        // --this.statusCode = status;
    }
}

export default ImageApiError;