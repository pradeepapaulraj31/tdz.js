let statuscode=200;
switch(statuscode){
    case 200:
        console.log(" OK: Request successful");
        break;
        case 201:
            console.log("Created: Resource created successfully");
            break;
            case 301:
                console.log("Moved Permanently: URL has changed");
                break;
                case 400:
                    console.log("Bad Request: Check request payload");
                    break;
                    case 401:
                        console.log("Unauthorized: Check auth token");
                        break;
                        case 403:
                            console.log("Forbidden: Insufficient permissions");
                            break;
                            case 404:
                                console.log(" Not Found: Check endpoint URL");
                                break;
                                case 500:
                                    console.log("Internal Server Error: Backend issue");
                                    break;
                                    default:
                                        console.log("Unknown status code");


}
