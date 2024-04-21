import wordpress from "wordpress";

export const PagesController = {
    createPage: (req, res) => {
        try {
            const {title, content, url} = req.body;

            if (!title || !content || !url) {
                return res.status(400).json({message: "Missing required fields"});
            }

            const client = wordpress.createClient({
                url,
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            });

            client.newPost({
                type: 'page',
                title: title,
                content: content,
                status: "publish",
            }, function (error, data) {
                if (error) {
                    console.error("Error creating page:", error);
                    return res.status(500).json({message: "Error creating page"});
                }
                console.log("Post sent! The server replied with the following:\n");
                console.log(data);

                res.status(200).json({message: "Page created successfully"});

            });
        } catch (e) {
            return res.status(500).json({message: "Error creating page"});
        }
    }
}
