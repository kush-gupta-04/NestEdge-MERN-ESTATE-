import mongoose, { model } from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EADAQAAICAQEFBgYBBQAAAAAAAAABAgMREgQhMUFRExQiMmFxBTNSU4GhkSNCYoKx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQTufCH8sCZyUeLwRu5LgskDbby2YAld0uiMdrL0IwQSq580jeN0ee4rmQLaeeBkqRk4+V4Jq7VLc9zKJQAAAAAAAAAAAIb548K58QNbZ6nhcCMwCAAaW3Qpjqk/Zc2BuDm2bbbJ+Hwr9kfebs/MkB1gUKdukt1yTX1LiXoyUoqSaafNAZMmABPTZnc/wAExTzjf0LNc9cfXmUbgAAAAAAAw3hZKsnqeSe54gVgAAIDaSbbxg5F9rusc3wfBdEdLa3jZrPbH7OSUAAEC1sFumzs2/DLh6MqmYvTJSXFPIHaBlmCKElMsS9yMAXQYi8pMyUAAAAAEO0PyogJto4x/JCQAABpfDtKZxXFrccc7ZQ2zZtMnZWsxe9roUUwAEDeiHaXQjjizRb3hLLfQ6WxbP2S1z875dEBaMAEUAAFqn5aNyOn5aJCgAAAAAhvW5MgLdkdUWioAABABVv22Nb01pTfXkVZbXc35seiRRes2Smbzp0v/F4Iu4V/XP8ARU7zd9yQ7zd9yQHSqoqq8sVnrzJTkd5u+5I3htt0XvxNdGB0wQ0bTC5YW6X0smIABmMdUkgLVaxBI2AKAAAAAAVro6ZbuDLJrOOqLQFQqbdfoj2cX4mt/oi4008Pkce+eu6cvUCMABAAAAABlNxacW01zR1dmu7avLxqW5pdTklv4dLFrjyaA6BPRH+5/gjrhrfpzLKWFhBWQAAAAAAAAABpOCkvXkeevqspscbItP8A6ekNLaq7oabIqS9QPNA6N/wua30S1L6ZbmUbKrK3/UrlH3QRoAAABNVst93krljq1hAQlz4ZRZO5WJeBJ5kWtn+FxjiV71P6VwOjGKisJYS4JBSMVFYRkAAAAAAAAAAAAAAAGGsmQBFLZqJeaqD/ANTXuezfZh/BOAI4UVQ8lcI+0SQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="
    },
}, { timestamps: true });

const user = mongoose.model('User', userSchema);

export default user;