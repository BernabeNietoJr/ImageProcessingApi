class ImageApiError extends Error{

    constructor(message: string, status: number) {
        super();
        this.message = message;
        //this.status = status;
    }
}

export default ImageApiError;