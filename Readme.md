## Setup Git (SSH Key)
create ssh key on your computer

ssh-keygen (press enter twice)

add ssh public key to github:

go to .ssh folder and copy whole content of id_rsa.pub

Settings > SSH key > New SSH Key > insert copied text 

get more information here: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

## Setup Git (VS Code authentication)
If you want to use the integrated GitHub authentication for VS Code, just go to the Source Control Tab on the left and click install Git:

![image](https://user-images.githubusercontent.com/39043890/204318674-5ba0d1b2-86ee-4cad-acb5-89f3ad983280.png)

After a VS Code restart, click clone repository and then login to your GitHub account:

![image](https://user-images.githubusercontent.com/39043890/204318765-be5d2259-e108-4141-b1d6-05f05e0276e3.png)


## Setup Enviroment

install NodeJs (Linux: mit apt-get windows download via browser)
Restart Laptop/PC

npm install react next react-router
npm run build

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
