import {
    Article,
    Article_resourceIdentifier,
    Article_comments,
    Article_voteResult,
    Article_author,
    Article_owner_PublicUserDTO,
    Article_owner_PublicUserDTO_resourceIdentifier,
    Article_contributors_articles,
    Article_contributors_links,
    Article_contributors_collections,
} from '../queries/Fragments/__generated__/Article'
import {
    ResourceTypeInput,
    ArticleStatusInput,
} from '../__generated__/globalTypes'

export const generateArticle = (mod: number) => ({
    associatedNfts: null,
    isRead: true,
    __typename: 'ArticleDTO' as Article['__typename'],
    resourceIdentifier: {
        __typename: 'ResourceIdentifier' as Article_resourceIdentifier['__typename'],
        type: 'ResourceIdentifier' as ResourceTypeInput,
        id: `123${mod}`,
        version: 1,
    },
    contributors: [
        {
            __typename: 'PublicUserDTO' as Article_author['__typename'],
            id: `679${mod}`,
            username: `test-author-username-${mod}`,
            name: `test author name ${mod}`,
            avatar: `test avatar ${mod}`,
            title: 'test title',
            social: {
                github: 'test github',
                twitter: 'twst twitter',
            },
            links: {
                __typename: 'ResponsePage_ExternalLinkDTO' as Article_contributors_links['__typename'],
                totalElements: 3,
            },
            collections: {
                __typename: 'ResponsePage_CollectionDTO' as Article_contributors_collections['__typename'],
                totalElements: 3,
            },
            articles: {
                __typename: 'ResponsePage_ArticleDTO' as Article_contributors_articles['__typename'],
                totalElements: 3,
            },
            communities: [],
        },
    ],
    description: `test description ${mod}`,
    id: `123${mod}`,
    version: 1,
    title: `test title ${mod}`,
    content: `{"markdown" : "test contet ${mod}"}`,
    authorId: `345${mod}`,
    dateCreated: '2019-01-01',
    datePublished: '2019-01-02',
    status: ArticleStatusInput.PUBLISHED,
    attributes: {},
    contentHash: `hash${mod}`,
    checkpoint: null,
    tags: ['Test', 'test2'],
    voteResult: {
        sum: 3,
        count: 3,
        hasVoted: false,
        quantity: 1,
        __typename: 'VoteResultDTO' as Article_voteResult['__typename'],
    },
    author: {
        __typename: 'PublicUserDTO' as Article_author['__typename'],
        id: `679${mod}`,
        username: `test-author-username-${mod}`,
        name: `test author name ${mod}`,
        avatar: `test avatar ${mod}`,
    },
    owner: {
        __typename: 'PublicUserDTO' as Article_owner_PublicUserDTO['__typename'],
        id: `678${mod}`,
        name: `test author name ${mod}`,
        avatar: `test avatar ${mod}`,
        publicUserName: `test-public-username-${mod}`,
        username: `test-author-username-${mod}`,
        resourceIdentifier: {
            id: `678${mod}`,
            type: 'ResourceIdentifier' as ResourceTypeInput,
            __typename: 'PublicUserDTO' as Article_owner_PublicUserDTO_resourceIdentifier['__typename'],
        },
    },
    comments: {
        content: [],
        totalPages: 0,
        totalElements: 0,
        __typename: 'ResponsePage_CommentDTO' as Article_comments['__typename'],
    },
    updateComment: `test update comment${mod}`,
    isBookmarked: true,
})

export const Community = {
    data: {
        getCommunity: {
            resourceIdentifier: {
                id: 'b9eb647c47a546bc95693acc0be72546',
                type: 'COMMMUNITY',
                __typename: 'ResourceIdentifier',
            },
            id: '5d2f30daaba2920001c82409',
            dateCreated: '2019-07-17T14:29:46.550Z',
            dateUpdated: '2019-07-23T15:27:47.396Z',
            creatorId: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
            creator: {
                id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                username: 'gregjeanmart',
                name: 'Grégoire Jeanmart',
                __typename: 'PublicUserDTO',
            },
            name: 'Java Ethereum',
            description:
                'Java is one of the worlds most popular programming languages used in global-scale applications by developers everywhere. This community brings together developers and projects at the forefront of bringing Ethereum support to this rich language ecosystem.',
            status: 'OPENED',
            website: '',
            avatar:
                'https://api.kauri.io:443/ipfs/QmQ9to7bfbR6ADTG2tAKVxWTNw8o3YbwJ1LzdpEJeanLBX',
            social: {},
            tags: ['ethereum', 'java', 'web3j', 'pantheon'],
            attributes: {
                background:
                    'https://api.kauri.io:443/ipfs/QmPyoXQaK9uA1oedsptssr1EhYRBF1A9vrnypbKAkMhuxQ',
            },
            homepage: [
                {
                    name: 'Getting Started',
                    description:
                        'Take your first steps integrating Java with Ethereum',
                    resourcesId: [
                        {
                            id: 'b9eb647c47a546bc95693acc0be72546',
                            type: 'ARTICLE',
                            __typename: 'ResourceIdentifier',
                        },
                        {
                            id: '925d923e12c543da9a0a3e617be963b4',
                            type: 'ARTICLE',
                            __typename: 'ResourceIdentifier',
                        },
                        {
                            id: '84475132317d4d6a84a2c42eb9348e4b',
                            type: 'ARTICLE',
                            __typename: 'ResourceIdentifier',
                        },
                        {
                            id: '14dc434d11ef4ee18bf7d57f079e246e',
                            type: 'ARTICLE',
                            __typename: 'ResourceIdentifier',
                        },
                        {
                            id: '760f495423db42f988d17b8c145b0874',
                            type: 'ARTICLE',
                            __typename: 'ResourceIdentifier',
                        },
                        {
                            id: '276dd27f1458443295eea58403fd6965',
                            type: 'ARTICLE',
                            __typename: 'ResourceIdentifier',
                        },
                    ],
                    resources: [
                        {
                            resourceIdentifier: {
                                type: 'ARTICLE',
                                id: 'b9eb647c47a546bc95693acc0be72546',
                                __typename: 'ResourceIdentifier',
                            },
                            id: 'b9eb647c47a546bc95693acc0be72546',
                            version: 2,
                            title:
                                'Connecting to an Ethereum client with Java, Eclipse and Web3j',
                            content:
                                '{"markdown":"\\n**Other articles in this series:**\\n- [Manage an Ethereum account with Java and Web3j](https://kauri.io/article/925d923e12c543da9a0a3e617be963b4)\\n- [Generate a Java Wrapper from your Smart Contract](https://kauri.io/article/84475132317d4d6a84a2c42eb9348e4b)\\n- [Interacting with an Ethereum Smart Contract in Java](https://kauri.io/article/14dc434d11ef4ee18bf7d57f079e246e)\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n\\n---------------------------------------------------\\n\\n[**Ethereum**](https://www.ethereum.org/) is a Blockchain, which means it operates on a [peer-to-peer network](https://en.wikipedia.org/wiki/Peer-to-peer) composed of thousand of nodes where each node agrees on the next state.\\n\\nIn order to interact with the Ethereum global state (distributed database), a program needs to connect to a node that exposes the standard [JSON-RPC API](https://github.com/ethereum/wiki/wiki/JSON-RPC#json-rpc-api) which can be used to execute operations on the Ethereum blockchain.\\n\\nIn this article, we will learn how to start an Ethereum Java project and connect to a node using the Java library **[Web3j](https://web3j.io/)**, a lightweight and modular library implementing all the functionallities required to work with Ethereum (JSON-RPC API client, wallet account management, Java Smart Contract wrapper, support for ENS, ERC20 and ERC721 and much more).\\n\\n![](https://web3j.readthedocs.io/en/latest/_images/web3j_network.png)\\n\\n## Prerequisite\\n\\nTo run this tutorial, we must have the following installed:\\n\\n-   [Java programming language](https://java.com/en/download/) (> 8)\\n\\n```shell\\n$ java -version\\njava version \\"1.8.0_201\\"\\n```\\n\\n-   A package and dependancy manager, for example [Maven](https://maven.apache.org/) or [Gradle](https://gradle.org/install/)\\n-   An IDE (Integrated development environment), for this tutorial, we use [Eclipse](https://www.eclipse.org/downloads/)\\n\\n## Start a new project\\n\\nFirst create a new Maven project called `java_ethereum` in Eclipse.\\n\\n### 1. Create a new Maven project\\n\\nOnce Eclipse is launched, we need to create a new Maven project. Go to _File > New > Project > Maven > Maven Project_\\n\\nCheck the box _Create a simple project (skip archetype selection)_ and click on _Next >_.\\n\\nNext screen, enter the _Group ID_ and _Artifact ID_ of our project then click _Finish_.\\n\\nGroup Id: `io.kauri.tutorials.java-ethereum`\\n\\nArtifact Id: `java-ethereum`\\n\\n![](https://imgur.com/IpEZ6gX.png)\\n\\nIt should result of a new project in the _Project Explorer_\\n\\n![](https://imgur.com/7uiey3U.png)\\n\\n### 2. Configure our project to use Java 8\\n\\nFinally, we need to tell Eclipse and Maven to use Java version 8.\\n\\nEdit the file `pom.xml` and add the following lines before `</project>`\\n\\n```xml\\n  <properties>\\n    <maven.compiler.target>1.8</maven.compiler.target>\\n    <maven.compiler.source>1.8</maven.compiler.source>\\n  </properties>\\n```\\n\\nNow, right click on the project name in the _Project Explorer_ and click on _Maven > Update Project_. Click _OK_ in the dialog box that pops up.\\n\\nIn the _Project Explorer_, You should see the _JRE System library_ changing from **JavaSE-1.5** to **JavaSE-1.8**.\\n\\n![](https://imgur.com/7Pvq9hJ.png)\\n\\n## Add Web3j library to our project\\n\\nIn this step, we import the latest version of Web3j to our project via maven.\\n\\nIn Eclipse, edit the file `pom.xml` and add the following lines before `</project>`:\\n\\n```xml\\n  <dependencies>\\n    <dependency>\\n      <groupId>org.web3j</groupId>\\n      <artifactId>core</artifactId>\\n      <version>4.3.0</version>\\n    </dependency>\\n  </dependencies>\\n```\\n\\n_Full pom.xml file available [here](https://github.com/gjeanmart/kauri-content/blob/master/java-ethereum/pom.xml)_\\n\\nSave file and dependencies will import. In your package explorer you will see a Maven dependencies folder with all the JAR (Java ARchive) packages for web3j and its dependencies.\\n\\n## Create a Main class\\n\\nNow, we have all the required dependencies to use Web3j, we can start coding our Ethereum Java program.\\n\\nCreate a Java class `Main.java` in your project by right-clicking on the project and selecting _New > Class_.\\nEnter the package name `io.kauri.tutorials.java_ethereum`, the class name `Main` and check _public static void main(String\\\\[] args)_.\\n\\n![](https://imgur.com/iipSbO0.png)\\n\\nClick on _Finish_ to generate the skeleton file.\\n\\n```java\\n//Main.java\\npackage io.kauri.tutorials.java_ethereum;\\n\\npublic class Main {\\n  public static void main(String[] args) {\\n    // TODO Auto-generated method stub\\n  }\\n}\\n```\\n\\n## Connect to an Ethereum node with Web3j.\\n\\nNow we have created our project, imported the Web3j library and prepared a program to run our code. We can now connect to an Ethereum node and start executing operations over the JSON-RPC API abstracted by Web3j.\\n\\n### 1. Add imports\\n\\nFirst import the packages needed for our code, or allow your IDE to automatically import them for you:\\n\\n```java\\nimport java.io.IOException;\\nimport org.web3j.protocol.Web3j;\\nimport org.web3j.protocol.http.HttpService;\\nimport org.web3j.protocol.core.methods.response.EthBlockNumber;\\nimport org.web3j.protocol.core.methods.response.EthGasPrice;\\nimport org.web3j.protocol.core.methods.response.Web3ClientVersion;\\n```\\n\\n### 2. Connect to the node\\n\\nTo connect to the node, Web3j requires the JSON-RPC API endpoint:\\n\\n```java\\nWeb3j web3 = Web3j.build(new HttpService(\\"<NODE ENDPOINT>\\"));\\n```\\n\\n#### Local Ethereum node or ganache-cli\\n\\nIf you are running locally a [Geth](https://geth.ethereum.org/), [Parity](https://www.parity.io/), [Pantheon](https://github.com/PegaSysEng/pantheon) client or [ganache-cli](https://github.com/trufflesuite/ganache-cli). Your node JSON-RPC API endpoint is `http://localhost:8545` by default\\n\\n```java\\nWeb3j web3 = Web3j.build(new HttpService(\\"http://localhost:8545\\"));\\n```\\n\\n#### Ganache application: Local development blockchain\\n\\nIf you are running the [Ganache](https://www.trufflesuite.com/ganache) application on your machine. Your node JSON-RPC API endpoint is `http://localhost:7545` by default. _ganche-cli uses port 8545_\\n\\n```java\\nWeb3j web3 = Web3j.build(new HttpService(\\"http://localhost:7545\\"));\\n```\\n\\n_Note: As a test network, Ganache doesn\'t support all the JSON-RPC API operations specified, for example `net_peercount`._\\n\\n#### Infura: Hosted nodes for public mainet and testnets\\n\\nIf you use [Infura](https://infura.io). The node JSON-RPC API endpoint is `https://<network>.infura.io/v3/<project key>`.\\n\\n```java\\nWeb3j web3 = Web3j.build(new HttpService(\\"https://mainnet.infura.io/v3/<project key>\\"));\\n```\\n\\n### 3. Execute API operations\\n\\nWeb3j implements a JSON-RPC API client for Ethereum which can be used in the following way `<response> = web3.<operation>.send()`. For example:\\n\\n```java\\ntry {\\n  // web3_clientVersion returns the current client version.\\n  Web3ClientVersion clientVersion = web3.web3ClientVersion().send();\\n\\n  //eth_blockNumber returns the number of most recent block.\\n  EthBlockNumber blockNumber = web3.ethBlockNumber().send();\\n\\n  //eth_gasPrice, returns the current price per gas in wei.\\n  EthGasPrice gasPrice =  web3.ethGasPrice().send();\\n\\n} catch(IOException ex) {\\n  throw new RuntimeException(\\"Error whilst sending json-rpc requests\\", ex);\\n}\\n```\\n\\n**Note:** Serilization of the JSON-RPC request can raise an `IOException` exception, so you need to handle it.\\n\\n## Result\\n\\nThe following code shows the entire Java program which connects to an Ethereum node and runs some JSON-RPC calls.\\n\\n```java\\n//Main.java\\npackage io.kauri.tutorials.java_ethereum;\\n\\nimport java.io.IOException;\\n\\nimport org.web3j.protocol.Web3j;\\nimport org.web3j.protocol.core.methods.response.EthBlockNumber;\\nimport org.web3j.protocol.core.methods.response.EthGasPrice;\\nimport org.web3j.protocol.core.methods.response.Web3ClientVersion;\\nimport org.web3j.protocol.http.HttpService;\\n\\npublic class Main {\\n\\n  public static void main(String[] args) {\\n    System.out.println(\\"Connecting to Ethereum ...\\");\\n    Web3j web3 = Web3j.build(new HttpService(\\"http://localhost:8545\\"));\\n    System.out.println(\\"Successfuly connected to Ethereum\\");\\n\\n    try {\\n      // web3_clientVersion returns the current client version.\\n      Web3ClientVersion clientVersion = web3.web3ClientVersion().send();\\n\\n      // eth_blockNumber returns the number of most recent block.\\n      EthBlockNumber blockNumber = web3.ethBlockNumber().send();\\n\\n      // eth_gasPrice, returns the current price per gas in wei.\\n      EthGasPrice gasPrice = web3.ethGasPrice().send();\\n\\n      // Print result\\n      System.out.println(\\"Client version: \\" + clientVersion.getWeb3ClientVersion());\\n      System.out.println(\\"Block number: \\" + blockNumber.getBlockNumber());\\n      System.out.println(\\"Gas price: \\" + gasPrice.getGasPrice());\\n\\n    } catch (IOException ex) {\\n      throw new RuntimeException(\\"Error whilst sending json-rpc requests\\", ex);\\n    }\\n  }\\n}\\n```\\n\\n_Full file available [here](https://github.com/gjeanmart/kauri-content/blob/master/java-ethereum/src/main/java/io/kauri/tutorials/java_ethereum/Main.java)_\\n\\nTo run the program, right-click on the file `Main.java` and click on _Run As > Java Application_. You should see in the console the following result.\\n\\n```shell\\nConnecting to Ethereum ...\\nSuccessfuly connected to Ethereum\\nClient version: Geth/v1.8.22-omnibus-260f7fbd/linux-amd64/go1.11.1\\nBlock number: 7983049\\nGas price: 3000000000\\n```\\n\\n![](https://imgur.com/MWJqowg.gif)\\n\\n## References\\n\\n-   [GitHub Project code](https://github.com/gjeanmart/kauri-content/tree/master/java-ethereum)\\n-   [Web3j website](https://web3j.io/)\\n-   [Web3j documentation](https://web3j.readthedocs.io/en/latest/)\\n-   [Web3j Github repo](https://github.com/web3j/web3j)\\n-   [Ethereum JSON-RPC API](https://github.com/ethereum/wiki/wiki/JSON-RPC)\\n\\n\\n-----------------------------\\n\\n**Next Steps:**\\n\\n- [Manage an Ethereum account with Java and Web3j](https://kauri.io/article/925d923e12c543da9a0a3e617be963b4)\\n- [Generate a Java Wrapper from your Smart Contract](https://kauri.io/article/84475132317d4d6a84a2c42eb9348e4b)\\n- [Interacting with an Ethereum Smart Contract in Java](https://kauri.io/article/14dc434d11ef4ee18bf7d57f079e246e)\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n"}',
                            description:
                                'Other articles in this series: - Manage an Ethereum account with Java and Web3j - Generate a Java Wrapper from your Smart Contract - Interacting with an Ethereum Smart Contract in Java - Listening for Ethereum Smart Contract Events in Java - Using Pantheon, the Java Ethereum Client with Linux Ethereum is a Blockchain, which means it operates on a peer-to-peer network composed of thousand of nodes where each node agrees on the next state. In order to interact with the Ethereum global state (distr',
                            dateCreated: '2019-07-19T15:40:19.256Z',
                            datePublished: '2019-07-19T15:40:22.354Z',
                            author: {
                                id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                name: 'Grégoire Jeanmart',
                                username: 'gregjeanmart',
                                avatar:
                                    'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '5d2f30daaba2920001c82409',
                                name: 'Java Ethereum',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/QmQ9to7bfbR6ADTG2tAKVxWTNw8o3YbwJ1LzdpEJeanLBX',
                                resourceIdentifier: {
                                    id: '5d2f30daaba2920001c82409',
                                    type: 'COMMUNITY',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'CommunityDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                    name: 'Grégoire Jeanmart',
                                    username: 'gregjeanmart',
                                    avatar:
                                        'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            status: 'PUBLISHED',
                            attributes: {
                                background:
                                    'https://api.kauri.io:443/ipfs/QmZjb5Kp3LFcXTVxneoJN3aco6NF91M7TbVfxUq4B4ySsX',
                            },
                            voteResult: {
                                sum: 0.0,
                                __typename: 'VoteResultDTO',
                            },
                            __typename: 'ArticleDTO',
                        },
                        {
                            resourceIdentifier: {
                                type: 'ARTICLE',
                                id: '925d923e12c543da9a0a3e617be963b4',
                                __typename: 'ResourceIdentifier',
                            },
                            id: '925d923e12c543da9a0a3e617be963b4',
                            version: 3,
                            title:
                                'Manage an Ethereum account with Java and Web3j',
                            content:
                                '{"markdown":"**Other articles in this series:**\\n- [Connecting to an Ethereum client with Java, Eclipse and Web3j](https://kauri.io/article/b9eb647c47a546bc95693acc0be72546)\\n- [Generate a Java Wrapper from your Smart Contract](https://kauri.io/article/84475132317d4d6a84a2c42eb9348e4b)\\n- [Interacting with an Ethereum Smart Contract in Java](https://kauri.io/article/14dc434d11ef4ee18bf7d57f079e246e)\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n\\n-------------------------------------------\\n\\nThe Ethereum blockchain is often compared to a World Computer with a global state. The global state grows after each new block and cosists of many accounts organised in a [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree).\\n\\n![](https://imgur.com/iQLdaOW.png)\\n\\nEach account has a state composed of information such as balance, nonce, storageRoot and codeHash, and is identified by a 20 bytes address (for example: `0x66aac71c0c81ec00aebead84914a10e307a4cbf9`).\\n\\nThere are two types of accounts:\\n\\n-   **Externally owned accounts**, which are controlled by private keys and have no code associated with them.\\n-   **Contract accounts**, which are controlled by their contract code and have code associated with them.\\n\\n![](https://imgur.com/3dlka35.png)\\n\\nIn this tutorial, we focus on externally owned accounts and how to retrieve information such as a balance, create or open an account and send transactions to another account using the Java library [Web3j](https://web3j.io/).\\n\\n## 1. Retrieve public information about an account\\n\\nThe Ethereum blockchain is a public shared ledger which we can query to retrieve information about the state at a different time, or block number.\\n\\n### Get account\'s balance\\n\\nEvery account has a balance of the Ethereum native cryptocurrency called **Ether**. Using our Web3j instance (see [article-1](#)), it is possible to retrieve the balance of an account at a given block using the function `web3.ethGetBalance(<accountAddress>, <blockNo>).send()`\\n\\nThe balance is stored by default in the smallest denomination of ether called _wei_ (1 ether = 10^18 wei) but Web3j provides a convenience utility class `Convert` to convert values between different units.\\n\\n-   Retrieve the latest balance (latest block) of an account:\\n\\n```java\\nEthGetBalance balanceWei = web3.ethGetBalance(\\"0xF0f15Cedc719B5A55470877B0710d5c7816916b1\\", DefaultBlockParameterName.LATEST).send();\\nSystem.out.println(\\"balance in wei: \\" + balanceWei);\\n\\nBigDecimal balanceInEther = Convert.fromWei(balanceWei.getBalance().toString(), Unit.ETHER);\\nSystem.out.println(\\"balance in ether: \\" + balanceInEther);\\n```\\n\\n![](https://imgur.com/S7w0eEH.png)\\n\\nIn the example above, the latest balance of the account `0xF0f15Cedc719B5A55470877B0710d5c7816916b1` is _33.25 ether_.\\n\\n-   Retrieve the balance of an account at a specific block, if the blockchain you connect to has generated any blocks so far. Test chains may not have yet:\\n\\n```java\\nEthGetBalance balance = web3.ethGetBalance(\\"0xF0f15Cedc719B5A55470877B0710d5c7816916b1\\", new DefaultBlockParameterNumber(3000000)).send();\\n\\nBigDecimal balanceInEther = Convert.fromWei(balance.getBalance().toString(), Unit.ETHER);\\n```\\n\\n![](https://imgur.com/PuUtKHV.png)\\n\\nThe balance at block #3,000,000 of the account `0xF0f15Cedc719B5A55470877B0710d5c7816916b1` is _8.12 ethers_.\\n\\n### Get account\'s nonce\\n\\nAlso included in the state of an account is the _nonce_, a sequence number symbolizing the number of transactions performed by an account.\\n\\nWeb3j provides the method `web3.ethGetTransactionCount(<accountAddress>, <blockNo>).send()` to retrieve the nonce at a given block number, in this case the most recent block.\\n\\n```java\\nEthGetTransactionCount ethGetTransactionCount = web3.ethGetTransactionCount(\\"0xF0f15Cedc719B5A55470877B0710d5c7816916b1\\", DefaultBlockParameterName.LATEST).send();\\n\\nBigInteger nonce =  ethGetTransactionCount.getTransactionCount();\\n```\\n\\n![](https://imgur.com/uJ2bcNk.png)\\n\\n## 2. Open or create an account\\n\\nIn order to control an externally owned account and the fund allocated on it, the 32 bytes **Private Key** associated to an account is needed. A private key is a confidential piece of information, so it usually doesn\'t come in clear text like `3a1076bf45ab87712ad64ccb3b10217737f7faacbf2872e88fdd9a537d8fe266` but is secured and encrypted in a wallet. There are many forms of wallets (more or less secured and practical):\\n\\n![](https://imgur.com/N74l0TI.png)\\n\\n![](https://imgur.com/m4JjJsM.png)\\n\\n![](https://imgur.com/X8mANUY.png)\\n\\nIn this section, we learn how to load an existing wallet and create a new one with Web3j to instanciate a `Credentials` object which we can use to sign and send transactions securely on the Ethereum blockchain.\\n\\n### Load a wallet\\n\\n#### From a JSON encryted keystore\\n\\nThe first form of wallet is the JSON encryted keystore, which is a password-encrypted version of the private key. This is the most standard way used by clients such as [Pantheon](https://pegasys.tech/) or [Geth](https://geth.ethereum.org/), but also by online tools like [MyEtherWallet](https://www.myetherwallet.com/) to secure a private key from potential attackers.\\n\\nWeb3j provides a utility class called `WalletUtils` to load a wallet into a `Credentials` object (wrapper containing the account address and the keypair).\\n\\n```java\\nString walletPassword = \\"secr3t\\";\\nString walletDirectory = \\"/path/to/wallets\\";\\nString walletName = \\"UTC--2019-06-20T08-55-56.200000000Z--fd7d68e16ef61868f3e325fafdf2fc1ec0b77649.json\\";\\n\\n// Load the JSON encryted wallet\\nCredentials credentials = WalletUtils.loadCredentials(walletPassword, walletDirectory + \\"/\\" + walletName);\\n\\n// Get the account address\\nString accountAddress = credentials.getAddress();\\n\\n// Get the unencrypted private key into hexadecimal\\nString privateKey = credentials.getEcKeyPair().getPrivateKey().toString(16);\\n```\\n\\n![](https://imgur.com/p92p616.png)\\n\\n#### From a Mnemonic phrase\\n\\nAnother common form of private key is the **Mnemonic sentence** (or seed phrase) which converts the 32 bytes key to a group of 12 easy to remember words. For example: `candy maple cake sugar pudding cream honey rich smooth crumble sweet treat`. This form was established by Bitcoin under the proposal [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).\\n\\nA mnemonic controls multiple private keys because of a mechanism to derive deterministically the mnemonic from a path.\\n\\nWe can optionally encrypt the mnemonic with a password.\\n\\n```java\\nString password = null; // no encryption\\nString mnemonic = \\"candy maple cake sugar pudding cream honey rich smooth crumble sweet treat\\";\\n\\nCredentials credentials = WalletUtils.loadBip39Credentials(password, mnemonic);\\n```\\n\\n![](https://imgur.com/xN2Ruaj.png)\\n\\nBy default, Web3j uses a derivation path equal to `m/44\'/60\'/0\'/1` (read [this article](https://medium.com/myetherwallet/hd-wallets-and-derivation-paths-explained-865a643c7bf2) to understand _derivation path_). However, it is possible to open another account on a different path:\\n\\n```java\\nString password = null; // no encryption\\nString mnemonic = \\"candy maple cake sugar pudding cream honey rich smooth crumble sweet treat\\";\\n\\n//Derivation path wanted: // m/44\'/60\'/0\'/0\\nint[] derivationPath = {44 | Bip32ECKeyPair.HARDENED_BIT, 60 | Bip32ECKeyPair.HARDENED_BIT, 0 | Bip32ECKeyPair.HARDENED_BIT, 0,0};\\n\\n// Generate a BIP32 master keypair from the mnemonic phrase\\nBip32ECKeyPair masterKeypair = Bip32ECKeyPair.generateKeyPair(MnemonicUtils.generateSeed(mnemonic, password));\\n\\n// Derived the key using the derivation path\\nBip32ECKeyPair  derivedKeyPair = Bip32ECKeyPair.deriveKeyPair(masterKeypair, derivationPath);\\n\\n// Load the wallet for the derived key\\nCredentials credentials = Credentials.create(derivedKeyPair);\\n```\\n\\n![](https://imgur.com/eEgEdOY.png)\\n\\n#### From a Private key\\n\\nAs mentioned before, a private key is a 32 bytes long number. To parse a private key with Web3j, we need to pass the private key to the class `Credentials`.\\n\\n```java\\nString pk = \\"c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3\\";\\n\\nCredentials credentials = Credentials.create(pk);\\n```\\n\\n![](https://imgur.com/svlvLnF.png)\\n\\n### Create a wallet\\n\\nFinally, if we don\'t already have an account and want to create a new one from scratch. Web3j\'s `WalletUtils` offers a method to create a JSON encrypted keystore.\\n\\n```java\\nString walletPassword = \\"secr3t\\";\\nString walletDirectory = \\"/path/to/destination/\\";\\n\\nString walletName = WalletUtils.generateNewWalletFile(password, new File(directory));\\nSystem.out.println(\\"wallet location: \\" + directory + \\"/\\" + walletName);\\n\\n\\nCredentials credentials = WalletUtils.loadCredentials(password, directory + \\"/\\" + walletName);\\n\\nString accountAddress = credentials.getAddress();\\nSystem.out.println(\\"Account address: \\" + credentials.getAddress());\\n```\\n\\n![](https://imgur.com/kbcemsH.png)\\n\\n## 3. Send a transaction\\n\\nNow we have learned how to retrieve public information (state), like the balance from an account and how to open an account using different methods, we can send a transaction to another account.\\n\\nA transaction on the Ethereum blockchain is composed of the following information:\\n\\n-   **nonce:** a count of the number of transaction sent by the sender.\\n-   **gasPrice (in wei):** the amount the sender is willing to pay per unit of gas required to execute the transaction.\\n-   **gasLimit:** the maximum amount of gas the sender is willing to pay to execute this transaction.\\n-   **to:** The address of the recipient account.\\n-   **value (in wei):** the amount of Wei to transfer from the sender to the recipient. In a contract-creating transaction, this value serves as the starting balance within the newly created contract account.\\n-   **signature:** Cryptographic signature that identified the sender of the transaction (from).\\n-   **data:** Optional field used to communicate with a smart contract (encoded string including the function name and the parameters).\\n\\nThere are two ways to send a transaction to the blockchain:\\n\\n-   **Via the Ethereum node:**\\n    This involves sending a non-signed transaction to the Ethereum client having the account _unlocked_.\\n    **_I personnaly don\'t recommend this method which might put your account at risk if the Ethereum node isn\'t correctly protected_**\\n\\n-   **Offline transaction:**\\n    The concept is to first construct the transaction object `rawTransaction` and sign it with a private key (Web3j Credential). Secondly send it to the Ethereum node via the JSON-RPC API to propagate across the network.\\n\\nOnce a transaction is broadcast to the network, a transaction hash is returned to the client but the transaction isn\'t performed yet. A set of miners/validators present on the network pick up all the pending transactions, group them into the next block and agree on the validity. Once verified, the transaction is mined into the new block. At this point, the client can claim a transaction receipt by transaction hash to aknowledge the good execution of his transaction.\\n\\n![](https://web3j.readthedocs.io/en/latest/_images/web3j_transaction.png)\\n\\n### Send funds from one account to another\\n\\n#### 1. Load an account and get the nonce\\n\\nAs explained in the previous sections, we need to load an account from one the methods and retrieve the nonce value of this account:\\n\\n```java\\nString walletPassword = \\"secr3t\\";\\nString walletPath = \\"/path/to/wallet/UTC--2019-06-20T11-41-39.478000000Z--256c75c85f9c27ac5b2a22f085d9643f7ed91dc1.json\\";\\n\\n// Decrypt and open the wallet into a Credential object\\nCredentials credentials = WalletUtils.loadCredentials(walletPassword, walletPath);\\n\\n// Get nonce\\nEthGetTransactionCount ethGetTransactionCount = web3.ethGetTransactionCount(credentials.getAddress(), DefaultBlockParameterName.LATEST).send();\\nBigInteger nonce =  ethGetTransactionCount.getTransactionCount();\\n```\\n\\n#### 2. Configure recipient account and amount to send\\n\\nIn the next step, we configure the amount (in Wei) to send to a recipient account.\\n\\n```java\\n// Recipient account\\nString recipientAddress = \\"0xDD6325C45aE6fAbD028D19fa1539663Df14813a8\\";\\n\\n// Value to Transfer\\nBigInteger value = Convert.toWei(\\"1\\", Unit.ETHER).toBigInteger();\\n```\\n\\n#### 3. Configure Gas parameters\\n\\nGas represents the fees of the network which taken by the miner who mines the block which includes your transaction.\\n\\nWhen sending a transaction, two parameters are important:\\n\\n-   **Gas Limit (in unit):** Gas limit refers to the maximum amount of gas you\'re willing to spend on a particular transaction. After the transaction is executed, if too much gas (`gasLimit`) was sent, the remaining gas is refunded to the sender.\\n\\n-   **Gas Price (in wei):** Amount of Ether you\'re willing to pay for every unit of gas\\n\\n```java\\n// A transfer cost 21,000 units of gas\\nBigInteger gasLimit = BigInteger.valueOf(21000);\\n\\n// I am willing to pay 1Gwei (1,000,000,000 wei or 0.000000001 ether) for each unit of gas consumed by the transaction.\\nBigInteger gasPrice = Convert.toWei(\\"1\\", Unit.GWEI).toBigInteger();\\n```\\n\\n#### 4. Prepare the raw transaction\\n\\nA raw transaction for a transfer of funds contains all the transaction data fields except:\\n\\n-   **data**: not a smart contract transaction\\n-   **signature**: signature not signed yet\\n\\n```java\\n// Prepare the rawTransaction\\nRawTransaction rawTransaction  = RawTransaction.createEtherTransaction(\\n\\tnonce,\\n\\tgasPrice,\\n\\tgasLimit,\\n\\trecipientAddress,\\n\\tvalue);\\n```\\n\\n#### 5. Signature\\n\\nThe signing part requires the `rawTransaction` as well as the `credentials` (keypair) used to cryptographically sign the transaction.\\n\\n```java\\n// Sign the transaction\\nbyte[] signedMessage = TransactionEncoder.signMessage(rawTransaction, credentials);\\n\\n// Convert it to Hexadecimal String to be sent to the node\\nString hexValue = Numeric.toHexString(signedMessage);\\n```\\n\\n#### 6. Send to the node via JSON-RPC\\n\\nThe final step consists of sending the transaction signed to the node so it can be verified and broadcast to the network. In case of success, the method returns a response composed of the transaction hash.\\n\\n```java\\n// Send transaction\\nEthSendTransaction ethSendTransaction = web3.ethSendRawTransaction(hexValue).send();\\n\\n// Get the transaction hash\\nString transactionHash = ethSendTransaction.getTransactionHash();\\n```\\n\\n#### 7. Wait for the transaction to be mined.\\n\\nAs explained before, when the signed transaction is propagated to the network, depending on many factors (gas price, network congestion) it can take some time to see the transaction mined and added to the last block.\\n\\nThat\'s why the following code consists of a simple loop to verify every 3 seconds if the transaction is mined by calling the method `web3.ethGetTransactionReceipt(<txhash>).send()`.\\n\\n```java\\n// Wait for transaction to be mined\\nOptional<TransactionReceipt> transactionReceipt = null;\\ndo {\\n  EthGetTransactionReceipt ethGetTransactionReceiptResp = web3.ethGetTransactionReceipt(transactionHash).send();\\n  transactionReceipt = ethGetTransactionReceiptResp.getTransactionReceipt();\\n\\n  Thread.sleep(3000); // Retry after 3 sec\\n} while(!transactionReceipt.isPresent());\\n```\\n\\n#### Result\\n\\nHere is the full version of the code including everything explained in this article:\\n\\n```java\\n// Transaction.java\\npackage io.kauri.tutorials.java_ethereum;\\n\\nimport java.io.IOException;\\nimport java.math.BigInteger;\\nimport java.util.Optional;\\n\\nimport org.web3j.crypto.Credentials;\\nimport org.web3j.crypto.RawTransaction;\\nimport org.web3j.crypto.TransactionEncoder;\\nimport org.web3j.protocol.Web3j;\\nimport org.web3j.protocol.core.DefaultBlockParameterName;\\nimport org.web3j.protocol.core.methods.response.EthGetTransactionCount;\\nimport org.web3j.protocol.core.methods.response.EthGetTransactionReceipt;\\nimport org.web3j.protocol.core.methods.response.EthSendTransaction;\\nimport org.web3j.protocol.core.methods.response.TransactionReceipt;\\nimport org.web3j.protocol.http.HttpService;\\nimport org.web3j.utils.Convert;\\nimport org.web3j.utils.Convert.Unit;\\nimport org.web3j.utils.Numeric;\\n\\npublic class Transaction {\\n\\n  public static void main(String[] args)  {\\n\\n    System.out.println(\\"Connecting to Ethereum ...\\");\\n    Web3j web3 = Web3j.build(new HttpService(\\"https://rinkeby.infura.io/v3/083836b2784f48e19e03487eb3209923\\"));\\n    System.out.println(\\"Successfuly connected to Ethereum\\");\\n\\n    try {\\n      String pk = \\"CHANGE_ME\\"; // Add a private key here\\n\\n      // Decrypt and open the wallet into a Credential object\\n      Credentials credentials = Credentials.create(pk);\\n      System.out.println(\\"Account address: \\" + credentials.getAddress());\\n      System.out.println(\\"Balance: \\" + Convert.fromWei(web3.ethGetBalance(credentials.getAddress(), DefaultBlockParameterName.LATEST).send().getBalance().toString(), Unit.ETHER));\\n\\n      // Get the latest nonce\\n      EthGetTransactionCount ethGetTransactionCount = web3.ethGetTransactionCount(credentials.getAddress(), DefaultBlockParameterName.LATEST).send();\\n      BigInteger nonce =  ethGetTransactionCount.getTransactionCount();\\n\\n      // Recipient address\\n      String recipientAddress = \\"0xAA6325C45aE6fAbD028D19fa1539663Df14813a8\\";\\n\\n      // Value to transfer (in wei)\\n      BigInteger value = Convert.toWei(\\"1\\", Unit.ETHER).toBigInteger();\\n\\n      // Gas Parameters\\n      BigInteger gasLimit = BigInteger.valueOf(21000);\\n      BigInteger gasPrice = Convert.toWei(\\"1\\", Unit.GWEI).toBigInteger();\\n\\n      // Prepare the rawTransaction\\n      RawTransaction rawTransaction  = RawTransaction.createEtherTransaction(\\n                 nonce,\\n                 gasPrice,\\n                 gasLimit,\\n                 recipientAddress,\\n                 value);\\n\\n      // Sign the transaction\\n      byte[] signedMessage = TransactionEncoder.signMessage(rawTransaction, credentials);\\n      String hexValue = Numeric.toHexString(signedMessage);\\n\\n      // Send transaction\\n      EthSendTransaction ethSendTransaction = web3.ethSendRawTransaction(hexValue).send();\\n      String transactionHash = ethSendTransaction.getTransactionHash();\\n      System.out.println(\\"transactionHash: \\" + transactionHash);\\n\\n      // Wait for transaction to be mined\\n      Optional<TransactionReceipt> transactionReceipt = null;\\n      do {\\n        System.out.println(\\"checking if transaction \\" + transactionHash + \\" is mined....\\");\\n            EthGetTransactionReceipt ethGetTransactionReceiptResp = web3.ethGetTransactionReceipt(transactionHash).send();\\n            transactionReceipt = ethGetTransactionReceiptResp.getTransactionReceipt();\\n            Thread.sleep(3000); // Wait 3 sec\\n      } while(!transactionReceipt.isPresent());\\n\\n      System.out.println(\\"Transaction \\" + transactionHash + \\" was mined in block # \\" + transactionReceipt.get().getBlockNumber());\\n      System.out.println(\\"Balance: \\" + Convert.fromWei(web3.ethGetBalance(credentials.getAddress(), DefaultBlockParameterName.LATEST).send().getBalance().toString(), Unit.ETHER));\\n\\n\\n    } catch (IOException | InterruptedException ex) {\\n      throw new RuntimeException(ex);\\n    }\\n  }\\n}\\n```\\n\\n![](https://imgur.com/8XU21KA.gif)\\n\\nNow we understand the core principles behind sending transactions with Web3j, I can tell you a secret. Web3j provides a Utility class called \'Transfer\' which takes care of everything (nonce, gas, transaction receipt polling, etc.) in one line of code.\\n\\n```java\\nTransactionReceipt receipt = Transfer.sendFunds(web3, credentials, recipientAddress, BigDecimal.valueOf(1), Unit.ETHER).send();\\n```\\n\\n## Summary\\n\\nIn this article, we learnt that the Ethereum Global State is composed of a mapping of all accounts states. We can query each account state can be queried to get information like the balance and the nonce.\\n\\nAn account is controlled by the person owning the private key of this account. The private key can have many forms and is usually secured in a wallet. Web3j allows to open a wallet from a JSON encrypted file, a mnemonic phrase or directly from the private key.\\n\\nTo send a transaction between two accounts, Web3j can generate a transaction oject, sign it and propagate it to the network to poll the Blockchain to get the transaction receipt when it\'s been mined.\\n\\n## Resources\\n\\n-   [Ethereum Unit converter (WEI, GWEI, ETHER, ....)](https://etherconverter.online/)\\n-   [Web3j Transaction doc](https://web3j.readthedocs.io/en/latest/transactions.html#transaction-signing-via-an-ethereum-client)\\n-   [Web3j RawTransaction Integration Tests](https://github.com/web3j/web3j/blob/master/integration-tests/src/test/java/org/web3j/protocol/scenarios/CreateRawTransactionIT.java)\\n-   [Ethereum - What is Gas Price and Limit](https://masterthecrypto.com/ethereum-what-is-gas-gas-limit-gas-price/)\\n-   [Diving into Ethereum World State](https://medium.com/cybermiles/diving-into-ethereums-world-state-c893102030ed)\\n\\n\\n-------------------------------------------\\n\\n**Next Steps:**\\n- [Generate a Java Wrapper from your Smart Contract](https://kauri.io/article/84475132317d4d6a84a2c42eb9348e4b)\\n- [Interacting with an Ethereum Smart Contract in Java](https://kauri.io/article/14dc434d11ef4ee18bf7d57f079e246e)\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)"}',
                            description:
                                'Other articles in this series: - Connecting to an Ethereum client with Java, Eclipse and Web3j - Generate a Java Wrapper from your Smart Contract - Interacting with an Ethereum Smart Contract in Java - Listening for Ethereum Smart Contract Events in Java - Using Pantheon, the Java Ethereum Client with Linux The Ethereum blockchain is often compared to a World Computer with a global state. The global state grows after each new block and cosists of many accounts organised in a Merkle tree. Each ac',
                            dateCreated: '2019-07-19T15:42:45.466Z',
                            datePublished: '2019-07-19T15:42:48.882Z',
                            author: {
                                id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                name: 'Grégoire Jeanmart',
                                username: 'gregjeanmart',
                                avatar:
                                    'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '5d2f30daaba2920001c82409',
                                name: 'Java Ethereum',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/QmQ9to7bfbR6ADTG2tAKVxWTNw8o3YbwJ1LzdpEJeanLBX',
                                resourceIdentifier: {
                                    id: '5d2f30daaba2920001c82409',
                                    type: 'COMMUNITY',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'CommunityDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                    name: 'Grégoire Jeanmart',
                                    username: 'gregjeanmart',
                                    avatar:
                                        'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            status: 'PUBLISHED',
                            attributes: {
                                background:
                                    'https://api.kauri.io:443/ipfs/QmTyEg3Lq2Bf2anauJnHcGtHiAJZ71kAbY2quL7jXZeWkh',
                            },
                            voteResult: {
                                sum: 0.0,
                                __typename: 'VoteResultDTO',
                            },
                            __typename: 'ArticleDTO',
                        },
                        {
                            resourceIdentifier: {
                                type: 'ARTICLE',
                                id: '84475132317d4d6a84a2c42eb9348e4b',
                                __typename: 'ResourceIdentifier',
                            },
                            id: '84475132317d4d6a84a2c42eb9348e4b',
                            version: 3,
                            title:
                                'Generate a Java Wrapper from your Smart Contract',
                            content:
                                "{\"markdown\":\"\\n\\n**Other articles in this series:**\\n- [Connecting to an Ethereum client with Java, Eclipse and Web3j](https://kauri.io/article/b9eb647c47a546bc95693acc0be72546)\\n- [Manage an Ethereum account with Java and Web3j](https://kauri.io/article/925d923e12c543da9a0a3e617be963b4)\\n- [Interacting with an Ethereum Smart Contract in Java](https://kauri.io/article/14dc434d11ef4ee18bf7d57f079e246e)\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n\\n-------------------------------------------\\n\\n\\nIn this article, we discover how to generate a [Java Wrapper Class](https://www.baeldung.com/java-wrapper-classes) directly from a smart contract to interact with a smart contract in Java.\\n\\nThere are different methods to generate a Java Wrapper Class from a Smart Contract:\\n\\n-   The [Web3j Command Line tool](https://web3j.readthedocs.io/en/latest/command_line.html) and solc\\n-   The Web3j Command Line tool and the artifacts generated by a Truffle build\\n-   The [web3j-maven-plugin](https://github.com/web3j/web3j-maven-plugin)\\n-   The [web3j-gradle-plugin](https://github.com/web3j/web3j-gradle-plugin)\\n\\nTo show how to use the methods above, this tutorial uses the following Smart Contract which notarizes documents into a registry on the Ethereum Blockchain.\\n\\n_DocumentRegistry.sol_\\n\\n```solidity\\npragma solidity ^0.5.6;\\n\\n\\n/**\\n*  @dev Smart Contract responsible to notarize documents on the Ethereum Blockchain\\n*/\\ncontract DocumentRegistry {\\n\\n  struct Document {\\n      address signer; // Notary\\n      uint date; // Date of notarization\\n      bytes32 hash; // Document Hash\\n  }\\n\\n  /**\\n   *  @dev Storage space used to record all documents notarized with metadata\\n   */\\n  mapping(bytes32 => Document) registry;\\n\\n  /**\\n   *  @dev Notarize a document identified by its 32 bytes hash by recording the hash, the sender and date in the registry\\n   *  @dev Emit an event Notarized in case of success\\n   *  @param _documentHash Document hash\\n   */\\n  function notarizeDocument(bytes32 _documentHash) external returns (bool) {\\n    registry[_documentHash].signer = msg.sender;\\n    registry[_documentHash].date = now;\\n    registry[_documentHash].hash = _documentHash;\\n\\n    emit Notarized(msg.sender, _documentHash);\\n\\n    return true;\\n  }\\n\\n  /**\\n   *  @dev Verify a document identified by its hash was noterized in the registry.\\n   *  @param _documentHash Document hash\\n   *  @return bool if document was noterized previsouly in the registry\\n   */\\n  function isNotarized(bytes32 _documentHash) external view returns (bool) {\\n    return registry[_documentHash].hash ==  _documentHash;\\n  }\\n\\n  /**\\n   *  @dev Definition of the event triggered when a document is successfully notarized in the registry\\n   */\\n  event Notarized(address indexed _signer, bytes32 _documentHash);\\n}\\n```\\n\\n## Method 1 - Web3j Command Line tool and solc\\n\\nThis first method generates the Smart contract ABI and bytecode from with `solc` and gives those two files as input to `web3j-cli` to generate the Wrapper.\\n\\n### 1. Install solc and verify the version\\n\\n[Install solc](https://solidity.readthedocs.io/en/develop/installing-solidity.html) and run the command below to make sure the solc version is greater than or equal to `0.5.6` (the version specified in the smart contract).\\n\\n```shell\\n$ solc --version\\nsolc, the solidity compiler commandline interface\\nVersion: 0.5.9+commit.c68bc34e.Linux.g++\\n```\\n\\n### 2. Install web3j-cli\\n\\nTo install the web3j-cli, download a zipfile/tarball from the [releases](https://github.com/web3j/web3j/releases/latest) page of the project repository, under the **Downloads** section, or for macOS users via [Homebrew](https://github.com/web3j/homebrew-web3j), or for Arch linux users via the [AUR](https://aur.archlinux.org/packages/web3j/).\\n\\n```bash\\nbrew tap web3j/web3j\\nbrew install web3j\\nweb3j\\n```\\n\\nTo run via a zipfile, extract it and run the binary, you may also want to add the binary to your `PATH`:\\n\\n```shell\\n$ unzip web3j-4.3.0.zip\\n    creating: web3j-4.3.0/lib/\\n    inflating: web3j-4.3.0/lib/core-1.0.2-all.jar\\n    creating: web3j-4.3.0/bin/\\n    inflating: web3j-4.3.0/bin/web3j\\n    inflating: web3j-4.3.0/bin/web3j.bat\\n$ ./web3j-<version>/bin/web3j\\n\\n                _      _____ _     _\\n            | |    |____ (_)   (_)\\n__      _____| |__      / /_     _   ___\\n\\\\ \\\\ /\\\\ / / _ \\\\ '_ \\\\     \\\\ \\\\ |   | | / _ \\\\\\n\\\\ V  V /  __/ |_) |.___/ / | _ | || (_) |\\n    \\\\_/\\\\_/ \\\\___|_.__/ \\\\____/| |(_)|_| \\\\___/\\n                        _/ |\\n                        |__/\\n\\nUsage: web3j version|wallet|solidity ...\\n```\\n\\n### 3. Compile the smart contract with solc\\n\\nGiven our Solidity file _DocumentRegistry.sol_, the `solc <sol> --bin --abi --optimize -o <output>` command compiles the smart contract and generates two new files in the same directory :\\n\\n```shell\\n$ solc DocumentRegistry.sol --bin --abi --optimize -o ./\\nCompiler run successful. Artifact(s) can be found in directory ./.\\n\\n$ ls -l\\ntotal 12\\n-rw-rw-r-- 1 gjeanmart gjeanmart  565 Jun 24 13:42 DocumentRegistry.abi\\n-rw-rw-r-- 1 gjeanmart gjeanmart  676 Jun 24 13:42 DocumentRegistry.bin\\n-rw-rw-r-- 1 gjeanmart gjeanmart 1488 Jun 24 13:40 DocumentRegistry.sol\\n```\\n\\n-   _DocumentRegistry.bin_: Binary file, bytecode of the smart contract\\n-   _DocumentRegistry.abi_: ABI (Application Binary Interface) of the smart contract which defines the interface in a JSON format.\\n\\n### 4. Generate the Wrapper with the web3j-cli\\n\\nUsing the ABI and bytecode (generated in step 3) and `web3j-cli` (installed during step 2), we can now generate our Smart contract Java Wrapper with the following command:\\n\\n```shell\\nweb3j solidity generate -a=<abiFile> -b=<binFile> -o=<destinationFileDir> -p=<packageName>\\n```\\n\\nFor example:\\n\\n```shell\\n$ web3j solidity generate -a DocumentRegistry.abi  -b DocumentRegistry.bin -o . -p me.gjeanmart.tutorials.javaethereum.wrapper\\n\\n              _      _____ _     _\\n             | |    |____ (_)   (_)\\n__      _____| |__      / /_     _   ___\\n\\\\ \\\\ /\\\\ / / _ \\\\ '_ \\\\     \\\\ \\\\ |   | | / _ \\\\\\n \\\\ V  V /  __/ |_) |.___/ / | _ | || (_) |\\n  \\\\_/\\\\_/ \\\\___|_.__/ \\\\____/| |(_)|_| \\\\___/\\n                         _/ |\\n                        |__/\\n\\nGenerating me.gjeanmart.tutorials.javaethereum.wrapper.DocumentRegistry ... File written to .\\n```\\n\\nAs a result, you should see the Java Wrapper file generated into the folder _<package-folders>/<contract>.java_ that you can copy to the _src/main/java/_ folder of your project.\\n\\n```shell\\n./me/gjeanmart/tutorials/javaethereum/wrapper/DocumentRegistry.java\\n```\\n\\n## Method 2 - Web3j Command Line tool and Truffle artefacts\\n\\n[**Truffle**](https://www.trufflesuite.com/truffle) is one of the most well-known frameworks to help you develop, test and deploy with Ethereum. We can use the artefacts that Truffle generates with the Web3j command line tool to create the wrapper class.\\n\\n### 1. Install Truffle\\n\\nTruffle is available as an npm package.\\n\\n```shell\\n$ npm install truffle -g\\n- Fetching solc version list from solc-bin. Attempt #1\\n+ truffle@5.0.24\\nadded 27 packages from 439 contributors in 11.636s\\n\\n$ truffle version\\nTruffle v5.0.24 (core: 5.0.24)\\nSolidity v0.5.0 (solc-js)\\nNode v10.15.3\\nWeb3.js v1.0.0-beta.37\\n```\\n\\n### 2. Initialize a new Truffle project\\n\\nTo initialize a Truffle project, use the command `truffle init` in a new folder. The command creates the folders _contracts/_, _migration/_ and _test/_, and the file _truffle-config.js_.\\n\\n```shell\\n$ mkdir truffle\\n$ cd truffle\\n$ truffle init\\n\\n? Preparing to download\\n? Downloading\\n? Cleaning up temporary files\\n? Setting up box\\n\\nUnbox successful. Sweet!\\n\\nCommands:\\n\\n  Compile:        truffle compile\\n  Migrate:        truffle migrate\\n  Test contracts: truffle test\\n\\n$ ls -l\\ntotal 20\\ndrwxrwxr-x 2 gjeanmart gjeanmart 4096 Jun 24 14:25 contracts\\ndrwxrwxr-x 2 gjeanmart gjeanmart 4096 Jun 24 14:25 migrations\\ndrwxrwxr-x 2 gjeanmart gjeanmart 4096 Jun 24 14:25 test\\n-rw-rw-r-- 1 gjeanmart gjeanmart 4233 Jun 24 14:25 truffle-config.js\\n```\\n\\n### 3. Add the contract into the folder `contracts`\\n\\nCopy the Smart Contract source _DocumentRegistry.sol_ into the folder _contracts_.\\n\\n### 4. Compile the contract\\n\\nCompile the smart contract with the command `truffle compile`, this command generates a new folder _build/contracts/_, containing a Truffle artefact for each Smart contract compiled.\\n\\n```shell\\n$ truffle compile\\n\\nCompiling your contracts...\\n===========================\\n> Compiling ./contracts/DocumentRegistry.sol\\n> Compiling ./contracts/Migrations.sol\\n> Artifacts written to /home/gjeanmart/workspace/tutorials/java-ethereum-wrapper/truffle/build/contracts\\n> Compiled successfully using:\\n   - solc: 0.5.8+commit.23d335f2.Emscripten.clang\\n\\n$ ls -l build/contracts/\\ntotal 136\\n-rw-rw-r-- 1 gjeanmart gjeanmart 79721 Jun 24 14:33 DocumentRegistry.json\\n-rw-rw-r-- 1 gjeanmart gjeanmart 54043 Jun 24 14:33 Migrations.json\\n```\\n\\n### 5. Generate the Smart Contract Java Wrapper from the Truffle Artefact\\n\\nFinally, web3j-cli provides a method to generate the Wrapper directly from the Truffle artefact result of `truffle compile` with the command:\\n\\n```shell\\n$ web3j  truffle generate ./build/contracts/DocumentRegistry.json -o . -p me.gjeanmart.tutorials.javaethereum.wrapper\\n\\n              _      _____ _     _\\n             | |    |____ (_)   (_)\\n__      _____| |__      / /_     _   ___\\n\\\\ \\\\ /\\\\ / / _ \\\\ '_ \\\\     \\\\ \\\\ |   | | / _ \\\\\\n \\\\ V  V /  __/ |_) |.___/ / | _ | || (_) |\\n  \\\\_/\\\\_/ \\\\___|_.__/ \\\\____/| |(_)|_| \\\\___/\\n                         _/ |\\n                        |__/\\n\\nGenerating me.gjeanmart.tutorials.javaethereum.wrapper.DocumentRegistry ... File written to .\\n```\\n\\nAs a result, you should see the Java Wrapper file generated into the folder _&lt;package_folders>/<contract>.java_ that you can copy to the _src/main/java/_ folder of your project.\\n\\n```shell\\n./me/gjeanmart/tutorials/javaethereum/wrapper/DocumentRegistry.java\\n```\\n\\n**Note**: With Truffle you can do a lot more than shown in this post, such as deployment scriptd (migration), Multi-network configuration, testing, debugging. I recommend reading [the following guide](https://kauri.io/collection/5b8e401ee727370001c942e3) to learn more about all the features.\\n\\n## Method 3 - web3j-maven-plugin\\n\\nThe next solution is more elegant than the previous two because we don't have to install the webj-cli and copy the file to the source folder. We can use this method directly inside a Java project using Maven and the [**web3j-maven-plugin**](https://github.com/web3j/web3j-maven-plugin). The following steps assume you have created a Maven project.\\n\\n### 1. Prerequisites\\n\\n[Install solc](https://solidity.readthedocs.io/en/develop/installing-solidity.html) and run the command below to make sure the solc version is greater than or equal to `0.5.6` (the version specified in the smart contract).\\n\\n```shell\\n$ solc --version\\nsolc, the solidity compiler commandline interface\\nVersion: 0.5.9+commit.c68bc34e.Linux.g++\\n```\\n\\n### 2. Copy the smart contract into the folder _src/main/resources_\\n\\nCopy the Smart Contract source _DocumentRegistry.sol_ into the _src/main/resources_ folder of the Maven project.\\n\\n### 3. Configure Maven to generate the Wrapper during the `generate-sources` phase\\n\\nIn this step, we configure two Maven plugins:\\n\\n#### web3j-maven-plugin\\n\\nThe first plugin does the same as the two previous methods but integrated with Maven. First we configure the plugin to execute automatically when entering the `generate-sources` phase of the project.\\n\\nSecondly we configure the plugin parameters:\\n\\n-   _packageName_: Package name to apply to the generated Wrapper classes\\n-   _sourceDestination_: Target destination folder to move the generated Wrapper classes\\n-   _soliditySourceFiles_: Where to find the Smart Contract source files\\n\\n#### build-helper-maven-plugin\\n\\nThe second plugin adds the _sourceDestination_ folder into the classpath so we can import the generated Wrapper classes\\n\\n_pom.xml_\\n\\n```xml\\n<build>\\n    <plugins>\\n        <plugin>\\n            <groupId>org.web3j</groupId>\\n            <artifactId>web3j-maven-plugin</artifactId>\\n            <version>4.2.0</version>\\n            <executions>\\n                <execution>\\n                    <id>generate-sources-web3j</id>\\n                    <phase>generate-sources</phase>\\n                    <goals>\\n                        <goal>generate-sources</goal>\\n                    </goals>\\n                    <configuration>\\n                        <packageName>me.gjeanmart.tutorials.javaethereum.contracts.generated</packageName>\\n                        <sourceDestination>${basedir}/target/generated-sources/contracts</sourceDestination>\\n                        <soliditySourceFiles>\\n                            <directory>${basedir}/src/main/resources</directory>\\n                            <includes>\\n                                <include>**/*.sol</include>\\n                            </includes>\\n                        </soliditySourceFiles>\\n                    </configuration>\\n                </execution>\\n            </executions>\\n        </plugin>\\n\\n        <plugin>\\n            <groupId>org.codehaus.mojo</groupId>\\n            <artifactId>build-helper-maven-plugin</artifactId>\\n            <executions>\\n                <execution>\\n                    <id>add-source</id>\\n                    <phase>generate-sources</phase>\\n                    <goals>\\n                        <goal>add-source</goal>\\n                    </goals>\\n                    <configuration>\\n                        <sources>\\n                            <source>${basedir}/target/generated-sources/contracts</source>\\n                        </sources>\\n                    </configuration>\\n                </execution>\\n            </executions>\\n        </plugin>\\n    </plugins>\\n</build>\\n```\\n\\n### 4. Run Maven generate-sources\\n\\nFinally, build the Maven project by using, for example `mvn clean package` (including the generate-sources phase). As a result, we can see the Java Wrapper has been generated into `/target/generated-sources/contracts/me/gjeanmart/tutorials/javaethereum/contracts/generated/DocumentRegistry.java` and added to the classpath automatically.\\n\\n![](https://imgur.com/nBMOWGq.png)\\n\\n## Method 4 - web3j-gradle-plugin\\n\\nThe last method is similar to the previous method with Maven, but using Gradle instead.\\n\\n### 1. Prerequisites\\n\\n[Install solc](https://solidity.readthedocs.io/en/develop/installing-solidity.html) and run the command below to make sure the solc version is greater than or equal to `0.5.6` (the version specified in the smart contract).\\n\\n```shell\\n$ solc --version\\nsolc, the solidity compiler commandline interface\\nVersion: 0.5.9+commit.c68bc34e.Linux.g++\\n```\\n\\n### 2. Place the smart contract into the folder _src/main/solidity_\\n\\nCopy the Smart Contract source _DocumentRegistry.sol_ into the folder _src/main/solidity_ of the Gradle project.\\n\\n### 3. Configure Gradle to generate the Wrapper during build\\n\\nFirst import the web3j-gradle plugin into the _build.gradle_ file\\n\\n```groovy\\nplugins {\\n    id 'org.web3j' version '4.3.0'\\n}\\n```\\n\\nThen we can configure the plugin to specify the package name and the target folder for the generated wrapper classes:\\n\\n```groovy\\nweb3j {\\n    generatedPackageName = 'me.gjeanmart.tutorials.javaethereum.contracts.generated'\\n    generatedFilesBaseDir = \\\"$buildDir/contracts\\\"\\n}\\n```\\n\\nTo use your system installed version of `solc` instead of the version bundled with the plugin, add the following lines to _build.gradle_:\\n\\n```groovy\\nsolidity {\\n    executable = \\\"solc\\\"\\n}\\n```\\n\\n_build.gradle_\\n\\n```groovy\\n/*\\n * This file was generated by the Gradle 'init' task.\\n *\\n * This generated file contains a sample Java Library project to get you started.\\n * For more details take a look at the Java Libraries chapter in the Gradle\\n * user guide available at https://docs.gradle.org/5.0/userguide/java_library_plugin.html\\n */\\n\\nplugins {\\n    // Apply the java-library plugin to add support for Java Library\\n    id 'java-library'\\n    id 'org.web3j' version '4.3.0'\\n}\\n\\nrepositories {\\n    // Use jcenter for resolving your dependencies.\\n    // You can declare any Maven/Ivy/file repository here.\\n    jcenter()\\n}\\n\\ndependencies {\\n    // This dependency is exported to consumers, that is to say found on their compile classpath.\\n    api 'org.apache.commons:commons-math3:3.6.1'\\n\\n    // This dependency is used internally, and not exposed to consumers on their own compile classpath.\\n    implementation 'com.google.guava:guava:26.0-jre'\\n    implementation 'org.web3j:core:4.3.0'\\n\\n    // Use JUnit test framework\\n    testImplementation 'junit:junit:4.12'\\n}\\n\\nweb3j {\\n    generatedPackageName = 'me.gjeanmart.tutorials.javaethereum.contracts.generated'\\n    generatedFilesBaseDir = \\\"$buildDir/contracts\\\"\\n}\\n\\nsolidity {\\n    executable = \\\"solc\\\"\\n}\\n```\\n\\n### 4. Execute gradle build\\n\\nIn this last step, we execute the build using `./gradlew tasks --all` and verify that our generated wrapper classes have been generated.\\n\\n![](https://imgur.com/dA0sVy1.png)\\n\\n\\n-------------------------------------------\\n\\n**Next Steps:**\\n- [Interacting with an Ethereum Smart Contract in Java](https://kauri.io/article/14dc434d11ef4ee18bf7d57f079e246e)\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n\"}",
                            description:
                                'Other articles in this series: - Connecting to an Ethereum client with Java, Eclipse and Web3j - Manage an Ethereum account with Java and Web3j - Interacting with an Ethereum Smart Contract in Java - Listening for Ethereum Smart Contract Events in Java - Using Pantheon, the Java Ethereum Client with Linux In this article, we discover how to generate a Java Wrapper Class directly from a smart contract to interact with a smart contract in Java. There are different methods to generate a Java Wrappe',
                            dateCreated: '2019-07-19T15:45:43.967Z',
                            datePublished: '2019-07-19T15:45:46.562Z',
                            author: {
                                id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                name: 'Grégoire Jeanmart',
                                username: 'gregjeanmart',
                                avatar:
                                    'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '5d2f30daaba2920001c82409',
                                name: 'Java Ethereum',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/QmQ9to7bfbR6ADTG2tAKVxWTNw8o3YbwJ1LzdpEJeanLBX',
                                resourceIdentifier: {
                                    id: '5d2f30daaba2920001c82409',
                                    type: 'COMMUNITY',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'CommunityDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                    name: 'Grégoire Jeanmart',
                                    username: 'gregjeanmart',
                                    avatar:
                                        'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            status: 'PUBLISHED',
                            attributes: {
                                background:
                                    'https://api.kauri.io:443/ipfs/QmTfBi56eSEH6PnX1fK7aYsQWv6Tq4mja1KH3Yxk8NFzJ5',
                            },
                            voteResult: {
                                sum: 0.0,
                                __typename: 'VoteResultDTO',
                            },
                            __typename: 'ArticleDTO',
                        },
                        {
                            resourceIdentifier: {
                                type: 'ARTICLE',
                                id: '14dc434d11ef4ee18bf7d57f079e246e',
                                __typename: 'ResourceIdentifier',
                            },
                            id: '14dc434d11ef4ee18bf7d57f079e246e',
                            version: 6,
                            title:
                                'Interacting with an Ethereum Smart Contract in Java',
                            content:
                                '{"markdown":"\\n**Other articles in this series:**\\n- [Connecting to an Ethereum client with Java, Eclipse and Web3j](https://kauri.io/article/b9eb647c47a546bc95693acc0be72546)\\n- [Manage an Ethereum account with Java and Web3j](https://kauri.io/article/925d923e12c543da9a0a3e617be963b4)\\n- [Generate a Java Wrapper from your Smart Contract](https://kauri.io/article/84475132317d4d6a84a2c42eb9348e4b)\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n\\n-------------------------------------------\\n\\nIn this tutorial, you will learn how to deploy a smart contract using the Web3j java library, along with how to interact with the functions of the smart contract.\\n\\nAs a prerequisite, you should be familiar with [account management](https://kauri.io/article/925d923e12c543da9a0a3e617be963b4/manage-an-ethereum-account-with-java-and-web3j) and contract java wrapper generation as described in the [previous article](https://kauri.io/article/84475132317d4d6a84a2c42eb9348e4b/generate-a-java-wrapper-from-your-smart-contract) in this series.  For continuity, we will deploy the same `DocumentRegistry` smart contract.\\n\\n_DocumentRegistry.sol_\\n\\n``` solidity\\npragma solidity ^0.5.6;\\n\\n\\n/**\\n*  @dev Smart Contract resposible to notarize documents on the Ethereum Blockchain\\n*/\\ncontract DocumentRegistry {\\n\\n    struct Document {\\n        address signer; // Notary\\n        uint date; // Date of notarization\\n        string hash; // Document Hash\\n    }\\n\\n    /**\\n     *  @dev Storage space used to record all documents notarized with metadata\\n     */\\n    mapping(bytes32 => Document) registry;\\n\\n    /**\\n     *  @dev Notarize a document identified by the hash of the document hash, the sender and date in the registry\\n     *  @dev Emit an event Notarized in case of success\\n     *  @param _documentHash Document hash\\n     */\\n    function notarizeDocument(string calldata _documentHash) external returns (bool) {\\n        bytes32 id = keccak256(abi.encodePacked(_documentHash));\\n\\n        registry[id].signer = msg.sender;\\n        registry[id].date = now;\\n        registry[id].hash = _documentHash;\\n\\n        emit Notarized(msg.sender, _documentHash);\\n\\n        return true;\\n    }\\n\\n    /**\\n     *  @dev Verify a document identified by its has was noterized in the registry previsouly.\\n     *  @param _documentHash Document hash\\n     *  @return bool if document was noterized previsouly in the registry\\n     */\\n    function isNotarized(string calldata _documentHash) external view returns (bool) {\\n        return registry[keccak256(abi.encodePacked(_documentHash))].signer != address(0);\\n    }\\n\\n    /**\\n     *  @dev Definition of the event triggered when a document is successfully notarized in the registry\\n     */\\n    event Notarized(address indexed _signer, string _documentHash);\\n}\\n```\\n\\n## A Brief Primer on Mining and Gas\\n\\n### Mining\\n\\nAny interactions with the Ethereum network that update EVM state must be triggered by a transaction that is broadcast to the blockchain.  Some example interactions include sending Ether to another account, deploying a smart contract and some smart contract function invocations.\\n\\nMiners are entities that secure the Ethereum network by constantly attempting to calculate the answer to a complex mathematical puzzle, a mechanism called Proof-of-Work consensus.\\n\\nIt is the job of miners to gather a bundle of pending transactions (from the mempool) and create a block that includes these transactions.  Once a transaction is included within a mined block, it is considered executed, and any related state changes will be applied.\\n\\n### Gas\\n\\nEther, the native cryptocurrency of Ethereum, is paid by the transaction sender to the miner that included the transaction within a block.  This is one of the ways that miners are incentivized.\\n\\nGas is a unit of computational work within the Ethereum network, and the amount of Ether paid whilst executing a transaction depends on how much gas is consumed, along with the `gasPrice` transaction attribute, which defines how much Ether the sender will pay per gas unit consumed.  Its important to understand that different transactions will require differing amounts of gas, depending on the operation, with each transaction costing a minimum of 21,000 gas.\\n\\nIt is also possible to define the absolute maximum amount of gas that a transaction sender is willing to consume in order to execute the transaction, by specifying the `gasLimit` attribute.\\n\\n## Deploying\\n\\nThe ability to deploy immutable smart contracts that live indefinitely is the secret sauce of Ethereum!  Smart contracts are pieces of code with functions that can be executed by any interested parties.  They live as bytecode within the network but are usually written in a language such as [Solidity](https://solidity.readthedocs.io/en) or [Vyper](https://vyper.readthedocs.io), then encoded and deployed.\\n\\nBy far the easiest way to deploy the `DocumentRegistry` smart contract is to use a wrapper that has been generated by Web3j.   This wrapper provides a native java class representation of the smart contract.  Two (non deprecated) `deploy` methods that can be used to deploy the code to the Ethereum network are provided:\\n\\n``` java\\npublic static RemoteCall<DocumentRegistry> deploy(Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider)\\n```\\n``` java\\npublic static RemoteCall<DocumentRegistry> deploy(Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider)\\n```\\n\\nThe latter allows the `TransactionManager` to be specified; an object which controls how Web3j connects to an Ethereum client.  We\'re happy to use the default `RawTransactionManager` in this example, so we\'ll use the former method, which takes wallet `Credentials` as an argument.  We must also create a `ContractGasProvider`, which provides the gas price and gas limit for the transaction; indirectly specifying how much the contract will cost to deploy, in Ether.\\n\\n_DocumentRegistry Deployment Code_\\n``` java\\n//Create credentials from private key\\nCredentials creds = Credentials.create(\\"0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63\\");\\n\\nDocumentRegistry registryContract = DocumentRegistry.deploy(web3j, creds, new DefaultGasProvider()).send();\\n\\nString contractAddress = registryContract.getContractAddress();\\n```\\nThe `deploy` method returns a `RemoteCall` object.  Calling `send()` on the `RemoteCall` synchronously deploys the smart contract to the Ethereum network, and returns an instance of `DocumentRegistry` which is linked to this deployed code.  Every deployed smart contract has a unique Ethereum address associated with it, and this address can be accessed by calling the `getContractAddress()` method on the contract wrapper, after deployment.\\n\\nIn this snippet, the credentials are constructed from a hard coded private key (for address 0xfe3b557e8fb62b89f4916b721be55ceb828dbd73).  This is fine for testing and demonstration purposes, but a production implementation should never hard code a private key, because an attacker will be able to take control of your account.  One approach to overcome this is to set the key as an environment variable on your server, and load this in your code.\\n\\nThe provided `DefaultGasProvider` is used in this example, which sets the gas price and limit to hard coded values, but a custom version can be built by implementing the below interface:\\n\\n``` java\\npublic interface ContractGasProvider {\\n    BigInteger getGasPrice(String contractFunc);\\n\\n    @Deprecated\\n    BigInteger getGasPrice();\\n\\n    BigInteger getGasLimit(String contractFunc);\\n\\n    @Deprecated\\n    BigInteger getGasLimit();\\n}\\n```\\n\\n## Creating a Wrapper Instance for an Already Deployed Contract\\nMore often than not, the smart contract that you want to interact with will already be deployed to the Ethereum network.  In this scenario, the static `load(..)` method can be used:\\n``` java\\npublic static DocumentRegistry load(String contractAddress, Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider)\\n```\\n``` java\\npublic static DocumentRegistry load(String contractAddress, Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider)\\n```\\n\\nFor example, if our `DocumentRegistry` is deployed with the address `0x10c7dc2b84b6c8e6df5a749655830e70adca3a2b`, we can obtain a java wrapper for the deployed contract as follows:\\n\\n``` java\\n//Create credentials from private key\\nCredentials creds = Credentials.create(\\"0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63\\");\\n\\nDocumentRegistry registryContract = DocumentRegistry.load(web3j, creds, new DefaultGasProvider());\\n```\\n## Invoking a Smart Contract Function\\n\\n### Transactions vs Calls\\n\\nA smart contract function can be invoked in 2 different ways, depending on the behaviour of the function.  \\n\\n#### Transactions\\n\\nTo invoke a smart contract function that can potentially change contract state (adding / updating / deleting a value), a transaction must be broadcast to the Ethereum network.  The function invocation details such as function name and argument values are encoded in the data field of a transaction in a well known format, and much like a regular Ether value transaction, the invocation will consume gas.  \\n\\nA miner must choose to include the transaction within a block in order for the function invocation to take place, so therefore transaction executions are asynchronous in nature.  After broadcasting the transaction, a unique hash is returned, which can then be used to request a transaction receipt from the Ethereum client (once it has been included within a block).\\n\\nFor a detailed explanation of Ethereum transactions, see [this guide](https://medium.com/blockchannel/life-cycle-of-an-ethereum-transaction-e5c66bae0f6e).\\n\\n#### Calls\\n\\nA call is local to the Ethereum client that your service is connected to, and does not broadcast anything to the wider Ethereum network.  Because of this, a contract call is free to execute; they do not consume any gas. However, call operations are read only, meaning that any state changes that occur within the smart contract function are not persisted and are rolled back after execution.  There is no mining involved, so executions are synchronous.\\n\\n### Using the Contract Wrapper\\n\\nAs was true for deploying, invoking a function using a Web3j generated contract wrapper is by far the easiest approach.  The tricky data encoding is encapsulated and handled for you under the covers.  \\n\\nA java method is generated that corresponds to each function within your smart contract.  Web3j establishes if the function should be invoked via a transaction or call automatically, at wrapper generation, based on the keywords of the function.  For example, a function definition that includes the `view` or `pure` keywords will be executed via a call, otherwise its assumed that there will be some potential state changes, and a transaction approach is used.\\n\\n#### Invoking `notarizeDocument(..)`\\nIn our `DocumentRegistry` example smart contract, the `notarizeDocument(..)` function stores the document details in the smart contract state and should therefore be triggered via a transaction in an asynchronous manner.  The generated function signature is:\\n\\n``` java\\npublic RemoteCall<TransactionReceipt> notarizeDocument(String _documentHash)\\n```\\nInterestingly, even though behind the scenes, a transaction is asynchronously broadcast to the network and included within a block, Web3j handles the transaction receipt polling on your behalf, and so the remote call returned by this method is actually synchronous and blocks until the transaction has been mined, subsequently returning the transaction receipt .  If this behaviour is not desired within your application, you will have to either send a transaction manually without the help of the wrapper, or make the remote call on a different thread.\\n\\nSo calling the `notarizeDocument` function is made very simple with the wrapper, and looks like this:\\n\\n``` java\\nDocumentRegistry documentRegistry = deployDocumentRegistryContract();\\nTransactionReceipt receipt = documentRegistry.notarizeDocument(\\n        \\"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco\\").send();\\n\\nString txHash = receipt.getTransactionHash();\\n```\\n\\nA `TransactionException` is thrown if the transaction fails.\\n\\n#### Invoking `isNotarized(..)`\\nAs this function is marked as a `view` function, this indicates that it is read-only and can therefore be called locally.  The generated method signature is:\\n\\n``` java\\npublic RemoteCall<Boolean> isNotarized(String _documentHash)\\n```\\nThis method is quite similar to the `notarizeDocument(..)` method, with one major difference;  the returned `RemoteCall` is of `Boolean` type and not `TransactionReceipt`.  This is because a transaction was not sent, and instead the return value of the smart contract function (`bool` in this case, converted to `Boolean`) is returned synchronously.\\n\\n### Manual Transaction Sending\\nIf for some reason, using the smart contract wrapper is not desirable, Web3j provides a number of helper classes to simplify the process of broadcasting a function invocation transaction, such as encoding the data field of the transaction, and the signing process.\\n\\n_Manual Transaction Sending Code_\\n``` java\\nFunction function = new Function(\\"notarizeDocument\\",\\n                Arrays.asList(new Utf8String(\\"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco\\")), Collections.emptyList());\\n\\n//Encode function values in transaction data format\\nString txData = FunctionEncoder.encode(function);\\n\\nTransactionManager txManager = new FastRawTransactionManager(web3j, creds);\\n\\nString txHash = txManager.sendTransaction(DefaultGasProvider.GAS_PRICE, DefaultGasProvider.GAS_LIMIT,\\n                documentRegistry.getContractAddress(), txData, BigInteger.ZERO).getTransactionHash();\\n```\\n\\n- First a `Function` object is created.  This defines the `notarizeDocument` function call, and contains the function name, a list of input arguments (Web3j provides java equivalents of all solidity smart contract types), and a list of return types (empty in our case).\\n\\n- Next, the `FunctionEncoder` is used to encode the function call definition into the transaction data field format. The actual encoding is out of scope for this article, but details can be found [here](https://solidity.readthedocs.io/en/develop/abi-spec.html) if interested.\\n\\n- A `TransactionManager` is constructed, which which will be used to build and sign the transaction, and broadcast to the Ethereum network. We use a `FastRawTransactionManager` in this case, which supports multiple transactions per block, and takes `Web3j` and `Credentials` objects as arguments. \\n\\n- Once we have a transaction manager and encoded data, invoking the `notarizeDocument` function is simply a matter of calling the `sendTransaction` method of the transaction manager.  Behind the scenes this will construct a transaction object, and signing it with the private key defined in the `Credentials` and then broadcast the transaction to the Ethereum network via the connected client.  Whereas it was the job of the `GasProvider` to set the gas values in the wrapper case, we much specify them manually with this method.  We have used default values in this example but you can change these values as you wish.  As its possible for a smart contract function to receive Ether during the invocation (a `payable` function), the last argument can be used to specify the amount of Ether (in the smallest denomination, `wei`) that should be sent from the sender account to the smart contract.  No Ether should be transferred in our case, so the value is set to zero.\\n\\n#### Obtaining the TransactionReceipt\\nYou\'ve probably noticed that the `sendTransaction` method in the code above, returns a transaction hash, and not a transaction receipt.  This is because of the asynchronous nature of transaction processing that has been mentioned earlier in this guide.  Luckily, web3j also provides a simple way to poll the network and wait until the transaction has been included within a block by a miner, the `TransactionReceiptProcessor`:\\n\\n``` java\\nTransactionReceiptProcessor receiptProcessor =\\n                new PollingTransactionReceiptProcessor(web3j, TransactionManager.DEFAULT_POLLING_FREQUENCY,\\n                        TransactionManager.DEFAULT_POLLING_ATTEMPTS_PER_TX_HASH);\\n\\nTransactionReceipt txReceipt = receiptProcessor.waitForTransactionReceipt(txHash);\\n```\\n## Summary\\nIn this guide you have learnt how to perform some of the most common interactions with the Ethereum blockchain in java, namely deploying a smart contract and then invoking functions on this contract via both transactions and calls.  Using the generated smart contract java wrappers are by far the easiest way to perform these tasks, but there are other options if you require more granularity.  Congratulations, you\'re well on your way to becoming a proficient Ethereum java developer!\\n\\nIn the next article in this series, we will walk you through how to [listen for emitted smart contract events](https://kauri.io/article/760f495423db42f988d17b8c145b0874/listening-for-ethereum-smart-contract-events-in-java).\\n\\n\\n-------------------------------------------\\n\\n**Next Steps:**\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n\\n\\n\\n"}',
                            description:
                                'Other articles in this series: - Connecting to an Ethereum client with Java, Eclipse and Web3j - Manage an Ethereum account with Java and Web3j - Generate a Java Wrapper from your Smart Contract - Listening for Ethereum Smart Contract Events in Java - Using Pantheon, the Java Ethereum Client with Linux In this tutorial, you will learn how to deploy a smart contract using the Web3j java library, along with how to interact with the functions of the smart contract. As a prerequisite, you should be',
                            dateCreated: '2019-07-19T17:17:59.619Z',
                            datePublished: '2019-07-19T17:18:04.060Z',
                            author: {
                                id: '4d91838268f6d6d4e590e8fd2a001cd91c32e7a4',
                                name: 'Craig Williams',
                                username: 'craig',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmekAbiDvz3Bc5y4pZB7Gnk5Zgn5iaa5CxQoSmTsDoPkP9',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '5d2f30daaba2920001c82409',
                                name: 'Java Ethereum',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/QmQ9to7bfbR6ADTG2tAKVxWTNw8o3YbwJ1LzdpEJeanLBX',
                                resourceIdentifier: {
                                    id: '5d2f30daaba2920001c82409',
                                    type: 'COMMUNITY',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'CommunityDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '4d91838268f6d6d4e590e8fd2a001cd91c32e7a4',
                                    name: 'Craig Williams',
                                    username: 'craig',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmekAbiDvz3Bc5y4pZB7Gnk5Zgn5iaa5CxQoSmTsDoPkP9',
                                    __typename: 'PublicUserDTO',
                                },
                                {
                                    id:
                                        'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                    name: 'Grégoire Jeanmart',
                                    username: 'gregjeanmart',
                                    avatar:
                                        'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            status: 'PUBLISHED',
                            attributes: {
                                background:
                                    'https://api.kauri.io:443/ipfs/QmQBqEvUaNN7ByVMSPrpa2Tw1mMGCCNPYyfai7Z6WE6Fwr',
                            },
                            voteResult: {
                                sum: 0.0,
                                __typename: 'VoteResultDTO',
                            },
                            __typename: 'ArticleDTO',
                        },
                        {
                            resourceIdentifier: {
                                type: 'ARTICLE',
                                id: '760f495423db42f988d17b8c145b0874',
                                __typename: 'ResourceIdentifier',
                            },
                            id: '760f495423db42f988d17b8c145b0874',
                            version: 4,
                            title:
                                'Listening for Ethereum Smart Contract Events in Java',
                            content:
                                '{"markdown":"\\n**Other articles in this series:**\\n- [Connecting to an Ethereum client with Java, Eclipse and Web3j](https://kauri.io/article/b9eb647c47a546bc95693acc0be72546)\\n- [Manage an Ethereum account with Java and Web3j](https://kauri.io/article/925d923e12c543da9a0a3e617be963b4)\\n- [Generate a Java Wrapper from your Smart Contract](https://kauri.io/article/84475132317d4d6a84a2c42eb9348e4b)\\n- [Interacting with an Ethereum Smart Contract in Java](https://kauri.io/article/14dc434d11ef4ee18bf7d57f079e246e)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n\\n-------------------------------------------\\n\\n\\n## What is a Smart Contract Event\\n\\nYou can emit an event from any smart contract function triggered by a transaction, and they are an important piece of the Ethereum application architecture puzzle.\\n\\nThese events consist of a name and up to 17 arguments, with the content of these arguments provided by the emitting function.  Arguments can either be indexed or non-indexed; with indexed arguments allowing for efficient off-chain querying.\\n\\n> For example, if event X contains an indexed string argument Y, off-chain I can retrieve all events where Y == \\"foo\\", using a filter. (More on filters later)\\n\\nEvents are stored as logs rather than within EVM storage, and because of this, they have properties that you should be aware of:\\n\\n-   **Not accessible from within a smart contract:** Although smart contract functions emit events, smart contracts cannot access this event information after emission.  This is true for both the emitting contract and any other external contract. Therefore, you cannot use events for cross-contract communication.\\n\\n-   **Events are cheap!:** As events are stored as logs, they are cheap compared to the traditional approach of updating the EVM storage state.  The exact cost depends on the event specification and the size of the data within the event.\\n\\n## Common Uses for Events\\n\\n### Asynchronous Off-chain Triggers\\n\\nMost enterprise Java developers are familiar with the Event Bus pattern, where events are published to a queue such as RabbitMQ or Amazon SQS.  This pattern allows services that are interested in specific events to consume them off the bus asynchronously, and perform further processing, without any coupling between the publisher and consumer services.\\n\\n_The Event Bus Pattern_\\n![](https://api.dev.kauri.io:443/ipfs/QmUwbWrK2kgPz2RpwghveWcgRQsH1BSiQhHtam6hFpxp1J)\\n\\nServices can use Ethereum smart contract events in a similar way, with the Ethereum network acting as a kind of messaging queue.  Off-chain services can register an event filter with a node, and will subsequently be notified each time this event is emitted in the Ethereum network.  You can then use these event notifications as a trigger for further off-chain processing, such as updating a NoSQL based cache of the smart contract state.\\n\\n_Ethereum as an \'Event Bus\'_\\n![](https://api.dev.kauri.io:443/ipfs/QmaMerpsdaU6xMT7QfJpfCa8ttZa9DuiGDrQaA7GzRiY9d)\\n\\n### Cheap Data Storage for Off-chain Consumption\\n\\nAs I mentioned above, storing data within an event rather than in EVM contract storage is significantly cheaper.\\n\\n> Diving a little bit into the specifics in order to compare, saving 32 bytes of data to contract storage costs 20,000 gas, whereas emitting an event costs 375 plus 375 for each indexed argument, and an additional 8 gas per byte of data.\\n\\nDue to these cost savings, it\'s a common pattern to store data never read by an on-chain smart contract function soley in an event, not in contract storage.\\n\\nAn example of a scenario where this may be the case, is a notary service where an IPFS hash is committed to the Ethereum blockchain in order to prove date of creation.  After an event has been emitted which contains the IPFS hash of the document, you can verify the timestamp of the notarisation off-chain if there is a dispute by querying the contract events, not the contract state.\\n\\n## Defining and Emitting an Event\\n\\nBoth defining and emitting and event within your Ethereum smart contracts are one liners:\\n\\n### Defining\\n\\n```solidity\\nevent Notarized(address indexed notary, string documentHash)\\n```\\n\\nIn this example we defined an event with the name `Notarized`, with an indexed address argument, `notary`,  and a single non-indexed string parameter, `documentHash`.\\n\\n### Emitting\\n\\n```solidity\\nfunction notarizeDocument(string _documentHash) public {\\n        emit Notarized(msg.sender, _documentHash);\\n}\\n```\\n\\nThe emit keyword fires an event, with arguments passed to the event in a way that is similar to function invocation.  Here, the notary address is set as the transaction sender address via `msg.sender`, and the `documentHash` is the same as the called function argument.\\n\\n## Listening for Emitted Events with Web3j\\n\\nBy far the easiest way to listen for Ethereum smart contract events using web3j is to use the contract wrapper feature of the library.  For a primer on the wrapper feature, see the previous post in this series [http://todo.com](here).\\n\\nThe below code snippet connects to a local Ethereum node and listens for all Notarized events emitted from a deployed Notary contract:\\n\\n```java\\nWeb3j web3j = Web3j.build(new HttpService(\\"http://localhost:8545\\"));\\n\\n//Deploys a notary contract via wrapper\\nfinal Notary notaryContract = deployNotaryContract(web3j);\\n\\nnotaryContract\\n        .notarizedEventFlowable(DefaultBlockParameterName.EARLIEST, DefaultBlockParameterName.LATEST)\\n        .subscribe(event -> {\\n            final String notary = event.notary;\\n            final String documentHash = event.documentHash;\\n\\n            //Perform processing based on event values\\n        });\\n```\\n\\nThe autogenerated contract wrapper code contains convenience methods for each event defined in your smart contract with the naming pattern `<event-name>EventFlowable`.  This method takes start and end block arguments, and as in this example, using the `DefaultBlockParameterName.LATEST` value instructs web3j to continue listening for events for new blocks indefinitely.  If you require a specific block range, you can use `DefaultBlockParameter.valueOf(BigInteger.valueOf(...))`.  A [Flowable](http://reactivex.io/RxJava/2.x/javadoc/io/reactivex/Flowable.html) object is returned which can then be subscribed to, in order to perform processing logic on emitted events.\\n\\nThis method simplifies the process of event listening, as it automatically converts the raw log messages into an object with fields reflecting the defined event arguments.  Without this, you would have to decode the values yourself, and although web3j provides helper methods for this, things can get complex quickly.\\n\\n### Filtering by Indexed Argument Value\\n\\nSetting an argument of an event as `indexed` faciliates efficient querying of events by that arguments value.  This querying is supported in Web3j by building an `EthFilter` object manually.  Below is the code to listen for events notarized by a specific Ethereum address:\\n\\n```java\\nfinal EthFilter ethFilter = new EthFilter(DefaultBlockParameterName.EARLIEST, DefaultBlockParameterName.LATEST,\\n                notaryContract.getContractAddress());\\n\\nethFilter.addSingleTopic(EventEncoder.encode(notaryContract.NOTARIZED_EVENT));\\nethFilter.addOptionalTopics(\\"0x\\" + TypeEncoder.encode(new Address(\\"0x00a329c0648769a73afac7f9381e08fb43dbea72\\")));\\n\\nnotaryContract\\n        .notarizedEventFlowable(ethFilter)\\n        .subscribe(event -> {\\n            final String notary = event.notary;\\n            final String documentHash = event.documentHash;\\n\\n            //Perform processing based on event values\\n        });\\n```\\n\\nThe `notarizedEventFlowable` is overloaded, and can accept an `EthFilter` as an argument, rather than a block range.  This filter is used to define which events to listen for in a more finely grained way, and is built up with the same block range as was previously passed to the method.\\n\\nThere are also some topics that are set on the filter.  In an Ethereum filter, the first topic is always defined as the keccak hash of the event signature, with the event signature in our case being `\'Notarised(address,string)\'\'`.  This is calculated with the help of the `EventEncoder.encode(..)` method provided by Web3j, along with the event specification, `NOTARIZED_EVENT` that has been auto-generated in the wrapper class.\\n\\nAdditional topics can be added using the `addOptionalTopics(..)` method, and these specify the values of indexed arguments to match against, in the same order as they are defined in the event specification.  Encoding varies slightly based on the type of the argument, but luckily, Web3j provides the `TypeEncoder` class which handles this for us.  In the example provided, we are only listening for events where the `notary` value is the address 0x00a329c0648769a73afac7f9381e08fb43dbea72.\\n\\n## Summary\\nEvents are a great way for backend (and frontend) services to be notified of smart contract changes and interactions in an asynchronous manner, as well a providing a cost effective way of storing data on the Ethereum blockchain that does not need to be consumed by a smart contract.\\n\\nAs with many Ethereum interactions, the smart contract wrappers generated by Web3j are by far the simplest way to subscribe to, and process emitted events in your java backend.\\n\\n\\n-------------------------------------------\\n\\n**Next Steps:**\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n"}',
                            description:
                                'Other articles in this series: - Connecting to an Ethereum client with Java, Eclipse and Web3j - Manage an Ethereum account with Java and Web3j - Generate a Java Wrapper from your Smart Contract - Interacting with an Ethereum Smart Contract in Java - Using Pantheon, the Java Ethereum Client with Linux What is a Smart Contract Event You can emit an event from any smart contract function triggered by a transaction, and they are an important piece of the Ethereum application architecture puzzle. Th',
                            dateCreated: '2019-07-22T09:10:19.848Z',
                            datePublished: '2019-07-22T09:10:23.268Z',
                            author: {
                                id: '4d91838268f6d6d4e590e8fd2a001cd91c32e7a4',
                                name: 'Craig Williams',
                                username: 'craig',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmekAbiDvz3Bc5y4pZB7Gnk5Zgn5iaa5CxQoSmTsDoPkP9',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '5d2f30daaba2920001c82409',
                                name: 'Java Ethereum',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/QmQ9to7bfbR6ADTG2tAKVxWTNw8o3YbwJ1LzdpEJeanLBX',
                                resourceIdentifier: {
                                    id: '5d2f30daaba2920001c82409',
                                    type: 'COMMUNITY',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'CommunityDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '4d91838268f6d6d4e590e8fd2a001cd91c32e7a4',
                                    name: 'Craig Williams',
                                    username: 'craig',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmekAbiDvz3Bc5y4pZB7Gnk5Zgn5iaa5CxQoSmTsDoPkP9',
                                    __typename: 'PublicUserDTO',
                                },
                                {
                                    id:
                                        'f0f15cedc719b5a55470877b0710d5c7816916b1',
                                    name: 'Grégoire Jeanmart',
                                    username: 'gregjeanmart',
                                    avatar:
                                        'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            status: 'PUBLISHED',
                            attributes: {
                                background:
                                    'https://api.kauri.io:443/ipfs/QmeG7oWJ5J8ZHE2p22Ww3buyAxBgWfkNBTx8Xx761n7gsG',
                            },
                            voteResult: {
                                sum: 0.0,
                                __typename: 'VoteResultDTO',
                            },
                            __typename: 'ArticleDTO',
                        },
                        {
                            resourceIdentifier: {
                                type: 'ARTICLE',
                                id: '276dd27f1458443295eea58403fd6965',
                                __typename: 'ResourceIdentifier',
                            },
                            id: '276dd27f1458443295eea58403fd6965',
                            version: 2,
                            title:
                                'Using Pantheon, the Java Ethereum Client with Linux',
                            content:
                                '{"markdown":"![Toolbelt: Pantheon included!](https://i.imgur.com/LhdU0DH.jpg)\\nOriginal photo by [Jesse Orrico](https://unsplash.com/@jessedo81?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)\\n\\nThis is the first article of a 3-part series on installing Pantheon, the Java client for Ethereum:\\n\\n1.  [Linux](#)\\n2.  macOS\\n3.  Windows\\n\\nHaving some powerful tools in your toolbelt is essential for a Java developer, and one of the crucial tools for an Ethereum blockchain developer is the network client. This is the piece of software that communicates data to and from the blockchain. Among other things, the client: spins up nodes, acts as a peer discovery agent to see who else is participating in the network and validates and sends transactions.\\n\\nThis guide helps you install and setup this core part you need for programming on Ethereum with Java. Although there are some great networking clients out there, Pantheon is the only one written in Java.\\n\\nPantheon is an open-source, Apache 2.0 licensed Ethereum client written in Java. It is mainnet compatible, has a modular architecture, and has privacy and permissioning features as well as new consensus algorithms.\\n\\nThis is the first of a series of step-by-step guides to install and configure the Pantheon client on Linux/macOS/Windows. This guide focuses on Linux operating system, but you can use many of the commands and steps on macOS with some basic modifications.\\n\\n## Try Pantheon with Docker\\n\\nBefore installing, I would suggest anyone wanting to setup and install Pantheon for the first time to try it out using our [Docker images](http://docs.pantheon.pegasys.tech/en/stable/Getting-Started/Run-Docker-Image/). The requirements to do so are having [Docker installed](https://docs.docker.com/v17.12/install/linux/docker-ce/ubuntu/) and using Linux or macOS.\\nYou can use a single docker command to run a mainnet, local or rinkeby version of Pantheon, and then use [`curl`](https://curl.haxx.se/) or similar tools to get or post data to the running node.\\n\\n> For quick, temporary tests this guide uses `/tmp/pantheon/dev/`, `/tmp/pantheon/mainnet/`, `/tmp/pantheon/rinkeby/` as mount volumes, which are automatically cleaned at every boot. You can create other folders instead, but whichever option you choose, make sure you create the folders first.\\n\\n```shell\\n$ mkdir -p /tmp/pantheon/dev/\\n$ mkdir -p /tmp/pantheon/mainnet/\\n$ mkdir -p /tmp/pantheon/rinkeby/\\n```\\n\\nHere are some examples:\\n\\nMainnet Node:\\n\\n```shell\\ndocker run pegasyseng/pantheon:latest\\n```\\n\\nLocal test Node with Websockets and HTTP RPC services enabled:\\n\\n```shell\\ndocker run -p 8545:8545 -p 8546:8546 --mount type=bind,source=/tmp/pantheon/dev,target=/var/lib/pantheon pegasyseng/pantheon:latest --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins=\\"all\\" --rpc-ws-enabled --network=dev\\n```\\n\\nRinkeby Node:\\n\\n```shell\\ndocker run -p 30303:30303 --mount type=bind,source=/tmp/pantheon/rinkeby,target=/var/lib/pantheon pegasyseng/pantheon:latest --network=rinkeby\\n```\\n\\nWhile the node is running, you can use another terminal window to interact with the node.\\n\\n![](https://i.imgur.com/kw1VHDs.png)\\n\\nFor example, using `curl` to call the `eth_chainId` RPC method:\\n\\n```shell\\ncurl -X POST --data \'{\\"jsonrpc\\":\\"2.0\\",\\"method\\":\\"eth_chainId\\",\\"params\\":[],\\"id\\":1}\' localhost:8545\\n```\\n\\n* * *\\n\\n## Getting started with Linux\\n\\nTwo installation methods are available:\\n\\n-   [Installing the binary distribution](http://docs.pantheon.pegasys.tech/en/stable/Installation/Install-Binaries/)\\n    For binary installation, [follow along to this section](#binary-install) and skip the next.\\n-   [Building from source](http://docs.pantheon.pegasys.tech/en/stable/Installation/Build-From-Source/)\\n    For building from source, [skip to this section](#build-from-source).\\n\\n> **Requirements**: For both of these methods, Pantheon needs the Java JDK installed on your machine. Current versions of Pantheon require Java JDK 11+ installed.\\n\\n### Binary install\\n\\nRemember to have at least 4GB of RAM if running a private network, and [review  the further requirements](http://docs.pantheon.pegasys.tech/en/stable/Installation/Overview/#disk-space-and-ram-requirements) for other installation types.\\n\\n1.  [Download the Pantheon binaries](https://bintray.com/consensys/pegasys-repo/pantheon/_latestVersion#files).\\n\\nYou can use `wget` to do this.\\n\\n```shell\\n$ sudo apt install wget\\n$ cd ~/bin/\\n$ wget   https://bintray.com/consensys/pegasys-repo/download_file?file_path=pantheon-1.1.4.tar.gz -O pantheon-1.1.4.tar.gz\\n$ wget https://bintray.com/consensys/pegasys-repo/download_file\\\\?file_path\\\\=pantheon-1.1.4.tar.gz -O pantheon-1.1.4.tar.gz\\n```\\n\\n> `$HOME/bin/` and `$HOME/.local/{bin,opt,usr}` are the recommended install folders for local user binaries on machines used by a single user. Other options are available such as `/opt/local/` or `/usr/local/bin/` depending on your local setup and preference. [Read this Stack Exchange thread for more details](https://unix.stackexchange.com/questions/36871/where-should-a-local-executable-be-placed).\\n\\n2.  Unpack the compressed file:\\n\\n```shell\\n$ tar -xzf pantheon-1.1.4.tar.gz\\n$ cd pantheon-1.1.4\\n```\\n\\n> Replace 1.1.4 with whichever release you downloaded.\\n\\n3.  Confirm the download isn\'t corrupted and check the version .The output should return the Pantheon and JDK version.\\n\\n```shell\\n$ bin/pantheon --version\\npantheon/v1.1.4/linux-x86_64/oracle_openjdk-java-11\\n```\\n\\n### Build from Source\\n\\nTwo options are available: [installing and running locally](http://docs.pantheon.pegasys.tech/en/stable/Installation/Build-From-Source/#installation-on-linux-unix-mac-os-x) or [on a VM](http://docs.pantheon.pegasys.tech/en/stable/Installation/Build-From-Source/#installation-on-vm).\\n\\nThis guide focuses on the local solution.\\n\\n1.  Clone the Pantheon codebase\\n\\n```shell\\n$ cd ~/bin/\\n$ git clone --recursive https://github.com/PegaSysEng/pantheon.git\\n```\\n\\n2.  Build Pantheon\\n\\n```shell\\n$ cd pantheon/\\n$ ./gradlew build -x test\\n```\\n\\n3.  Choose distribution version and check version.\\n\\n```shell\\n$ cd build/distributions/\\n$ tar -xzf pantheon-1.1.4.tar.gz\\n$ cd pantheon-1.1.4/\\n$ bin/pantheon --version\\n$ bin/pantheon --help\\n```\\n\\n## Config\\n\\nNo additional configuration is necessary for Pantheon to run correctly.\\nEach different network type (including mainnet) set by the `--network` command line flags automatically loads the appropriate default configuration.\\n\\nIf you need to change the settings, these options are either configured at Node or Network-level.\\nNetwork-level settings are defined in the genesis file and are loaded by every Node connected to that specific network. Whereas Node-level settings are modified either in the node configuration file, or through command line flags.\\n\\nFor more information on configuration, [read the corresponding documentation](http://docs.pantheon.pegasys.tech/en/stable/Configuring-Pantheon/Network-vs-Node/).\\n\\n## Starting Pantheon\\n\\nAfter you have completed the above steps, you can continue using this distribution with the [regular Starting Pantheon guide](http://docs.pantheon.pegasys.tech/en/stable/Getting-Started/Starting-Pantheon/).\\n\\nFor a quick preview, this could be an HTTP request on a `dev` network Node running with docker.\\n\\n```shell\\n$ docker run -p 8545:8545 --mount type=bind,source=/tmp/pantheon/dev,target=/var/lib/pantheon pegasyseng/pantheon:latest --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins=\\"all\\" --rpc-http-enabled --network=dev\\n```\\n\\nThis is how you build a request calling the `eth_chainId` method.\\n\\n```java\\nString payload=\'{\\"jsonrpc\\":\\"2.0\\",\\"method\\":\\"eth_chainId\\",\\"params\\":[],\\"id\\":1}\';\\nString requestUrl=\\"http://localhost:8545\\";\\nsendRequest(requestUrl, payload);\\n```\\n\\nAnd the method implementation:\\n\\n```java\\npublic static String sendRequest(String requestUrl, String payload) {\\n    try {\\n        URL url = new URL(requestUrl);\\n        HttpURLConnection connection = (HttpURLConnection) url.openConnection();\\n\\n        connection.setDoInput(true);\\n        connection.setDoOutput(true);\\n        connection.setRequestMethod(\\"GET\\");\\n        connection.setRequestProperty(\\"Accept\\", \\"application/json\\");\\n        connection.setRequestProperty(\\"Content-Type\\", \\"application/json; charset=UTF-8\\");\\n        OutputStreamWriter outputWriter = new OutputStreamWriter(connection.getOutputStream(), \\"UTF-8\\");\\n\\n        outputWriter.write(payload);\\n        outputWriter.close();\\n\\n        BufferedReader buffer = new BufferedReader(new InputStreamReader(connection.getInputStream()));\\n        StringBuffer jsonString = new StringBuffer();\\n        String line;\\n        while ((line = buffer.readLine()) != null) {\\n                jsonString.append(line);\\n        }\\n        buffer.close();\\n\\n        connection.disconnect();\\n        return jsonString.toString();\\n    } catch (Exception e) {\\n            throw new RuntimeException(e.getMessage());\\n    }\\n}\\n```\\n\\nThat request should return the following result:\\n\\n```json\\n{\\n  \\"jsonrpc\\" : \\"2.0\\",\\n  \\"id\\" : 1,\\n  \\"result\\" : {\\n    \\"startingBlock\\" : \\"0x0\\",\\n    \\"currentBlock\\" : \\"0x2d0\\",\\n    \\"highestBlock\\" : \\"0x66c0\\"\\n  }\\n}\\n```\\n\\nFine more information in the [Pantheon documentation](http://docs.pantheon.pegasys.tech/en/stable/)."}',
                            description:
                                'Toolbelt: Pantheon included! Original photo by Jesse Orrico This is the first article of a 3-part series on installing Pantheon, the Java client for Ethereum: Linux macOS Windows Having some powerful tools in your toolbelt is essential for a Java developer, and one of the crucial tools for an Ethereum blockchain developer is the network client. This is the piece of software that communicates data to and from the blockchain. Among other things, the client: spins up nodes, acts as a peer discovery',
                            dateCreated: '2019-07-19T12:57:15.901Z',
                            datePublished: '2019-07-19T12:57:18.891Z',
                            author: {
                                id: '824e8fa64ff92b859cc9991ac044e00b665b9b04',
                                name: 'Felipe Faraggi',
                                username: 'felipefaraggi',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/QmUR61QiSMk1XqBaAyvA7WmgVBP44x7RQMBa8RU3DCMp6f',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '5d2f30daaba2920001c82409',
                                name: 'Java Ethereum',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/QmQ9to7bfbR6ADTG2tAKVxWTNw8o3YbwJ1LzdpEJeanLBX',
                                resourceIdentifier: {
                                    id: '5d2f30daaba2920001c82409',
                                    type: 'COMMUNITY',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'CommunityDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '824e8fa64ff92b859cc9991ac044e00b665b9b04',
                                    name: 'Felipe Faraggi',
                                    username: 'felipefaraggi',
                                    avatar:
                                        'https://api.kauri.io:443/ipfs/QmUR61QiSMk1XqBaAyvA7WmgVBP44x7RQMBa8RU3DCMp6f',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            status: 'PUBLISHED',
                            attributes: {
                                background:
                                    'https://api.kauri.io:443/ipfs/QmUzvLvjLLisUjUunfW81gqCuZ32Uhn5mdiidJ7ArKkkb4',
                            },
                            voteResult: {
                                sum: 0.0,
                                __typename: 'VoteResultDTO',
                            },
                            __typename: 'ArticleDTO',
                        },
                    ],
                    __typename: 'SectionDTO',
                },
                {
                    name: 'Intermediate',
                    description: 'Section coming soon...',
                    resourcesId: [],
                    resources: [],
                    __typename: 'SectionDTO',
                },
                {
                    name: 'Advanced',
                    description: 'Section coming soon...',
                    resourcesId: [],
                    resources: [],
                    __typename: 'SectionDTO',
                },
            ],
            members: [
                {
                    id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                    name: 'Grégoire Jeanmart',
                    username: 'gregjeanmart',
                    avatar:
                        'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                    role: 'ADMIN',
                    status: 'EMAIL_VERIFIED',
                    __typename: 'CommunityMemberDTO',
                },
                {
                    id: '4d91838268f6d6d4e590e8fd2a001cd91c32e7a4',
                    name: 'Craig Williams',
                    username: 'craig',
                    avatar:
                        'https://api.beta.kauri.io:443/ipfs/QmekAbiDvz3Bc5y4pZB7Gnk5Zgn5iaa5CxQoSmTsDoPkP9',
                    role: 'ADMIN',
                    status: 'EMAIL_VERIFIED',
                    __typename: 'CommunityMemberDTO',
                },
                {
                    id: '824e8fa64ff92b859cc9991ac044e00b665b9b04',
                    name: 'Felipe Faraggi',
                    username: 'felipefaraggi',
                    avatar:
                        'https://api.kauri.io:443/ipfs/QmUR61QiSMk1XqBaAyvA7WmgVBP44x7RQMBa8RU3DCMp6f',
                    role: 'ADMIN',
                    status: 'EMAIL_VERIFIED',
                    __typename: 'CommunityMemberDTO',
                },
                {
                    id: '3638ed27d6e2f9e3494ff3d78f309cea7d898ebc',
                    name: 'FerParis',
                    username: 'Paris',
                    avatar:
                        'https://api.kauri.io:443/ipfs/QmTgYVnxH9Ggj48erSjpuJkmPSncE4W3GND5LBt3twhXzA',
                    role: 'CURATOR',
                    status: 'EMAIL_VERIFIED',
                    __typename: 'CommunityMemberDTO',
                },
                {
                    id: '9b66e2c73ee59c11ac25ef2730ab589c5416e81a',
                    name: 'Chris Ward',
                    username: 'ChrisChinchilla',
                    avatar:
                        'https://api.beta.kauri.io:443/ipfs/Qmf3VwAmcivMAFzRoDJgzJ3hgrjAEKvDh3i7Lm8zAoQnw3',
                    role: 'ADMIN',
                    status: 'EMAIL_VERIFIED',
                    __typename: 'CommunityMemberDTO',
                },
                {
                    id: 'e690a3445bf1f5138eb3b3c15d6fd524d0307e05',
                    name: 'Ivaylo Kirilov',
                    username: 'iikirilov',
                    avatar:
                        'https://api.kauri.io:443/ipfs/QmdEzWvkc3NkUbJrZjXPRc2ayrffRq7JM9EyYvsmoHz7NA',
                    role: 'CURATOR',
                    status: 'EMAIL_VERIFIED',
                    __typename: 'CommunityMemberDTO',
                },
                {
                    id: '1ac7bb851ac961b74b35f5e9f0319a23cdcb20f9',
                    name: 'Javier',
                    username: 'janayama',
                    avatar:
                        'https://api.kauri.io:443/ipfs/QmYS41Ey2Ri8rinvvcLB4xvZffwVXqJYpwrsFphAGiVwR1',
                    role: 'CURATOR',
                    status: 'EMAIL_VERIFIED',
                    __typename: 'CommunityMemberDTO',
                },
            ],
            approvedId: [
                {
                    id: 'b9eb647c47a546bc95693acc0be72546',
                    type: 'ARTICLE',
                    __typename: 'ResourceIdentifier',
                },
                {
                    id: '925d923e12c543da9a0a3e617be963b4',
                    type: 'ARTICLE',
                    __typename: 'ResourceIdentifier',
                },
                {
                    id: '84475132317d4d6a84a2c42eb9348e4b',
                    type: 'ARTICLE',
                    __typename: 'ResourceIdentifier',
                },
                {
                    id: '14dc434d11ef4ee18bf7d57f079e246e',
                    type: 'ARTICLE',
                    __typename: 'ResourceIdentifier',
                },
                {
                    id: '760f495423db42f988d17b8c145b0874',
                    type: 'ARTICLE',
                    __typename: 'ResourceIdentifier',
                },
                {
                    id: '276dd27f1458443295eea58403fd6965',
                    type: 'ARTICLE',
                    __typename: 'ResourceIdentifier',
                },
            ],
            pendingId: [],
            approved: [
                {
                    associatedNfts: null,
                    resourceIdentifier: {
                        id: 'b9eb647c47a546bc95693acc0be72546',
                        type: 'ARTICLE',
                        __typename: 'ResourceIdentifier',
                        version: 2,
                    },
                    description:
                        'Other articles in this series: - Manage an Ethereum account with Java and Web3j - Generate a Java Wrapper from your Smart Contract - Interacting with an Ethereum Smart Contract in Java - Listening for Ethereum Smart Contract Events in Java - Using Pantheon, the Java Ethereum Client with Linux Ethereum is a Blockchain, which means it operates on a peer-to-peer network composed of thousand of nodes where each node agrees on the next state. In order to interact with the Ethereum global state (distr',
                    id: 'b9eb647c47a546bc95693acc0be72546',
                    version: 2,
                    title:
                        'Connecting to an Ethereum client with Java, Eclipse and Web3j',
                    content:
                        '{"markdown":"\\n**Other articles in this series:**\\n- [Manage an Ethereum account with Java and Web3j](https://kauri.io/article/925d923e12c543da9a0a3e617be963b4)\\n- [Generate a Java Wrapper from your Smart Contract](https://kauri.io/article/84475132317d4d6a84a2c42eb9348e4b)\\n- [Interacting with an Ethereum Smart Contract in Java](https://kauri.io/article/14dc434d11ef4ee18bf7d57f079e246e)\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n\\n---------------------------------------------------\\n\\n[**Ethereum**](https://www.ethereum.org/) is a Blockchain, which means it operates on a [peer-to-peer network](https://en.wikipedia.org/wiki/Peer-to-peer) composed of thousand of nodes where each node agrees on the next state.\\n\\nIn order to interact with the Ethereum global state (distributed database), a program needs to connect to a node that exposes the standard [JSON-RPC API](https://github.com/ethereum/wiki/wiki/JSON-RPC#json-rpc-api) which can be used to execute operations on the Ethereum blockchain.\\n\\nIn this article, we will learn how to start an Ethereum Java project and connect to a node using the Java library **[Web3j](https://web3j.io/)**, a lightweight and modular library implementing all the functionallities required to work with Ethereum (JSON-RPC API client, wallet account management, Java Smart Contract wrapper, support for ENS, ERC20 and ERC721 and much more).\\n\\n![](https://web3j.readthedocs.io/en/latest/_images/web3j_network.png)\\n\\n## Prerequisite\\n\\nTo run this tutorial, we must have the following installed:\\n\\n-   [Java programming language](https://java.com/en/download/) (> 8)\\n\\n```shell\\n$ java -version\\njava version \\"1.8.0_201\\"\\n```\\n\\n-   A package and dependancy manager, for example [Maven](https://maven.apache.org/) or [Gradle](https://gradle.org/install/)\\n-   An IDE (Integrated development environment), for this tutorial, we use [Eclipse](https://www.eclipse.org/downloads/)\\n\\n## Start a new project\\n\\nFirst create a new Maven project called `java_ethereum` in Eclipse.\\n\\n### 1. Create a new Maven project\\n\\nOnce Eclipse is launched, we need to create a new Maven project. Go to _File > New > Project > Maven > Maven Project_\\n\\nCheck the box _Create a simple project (skip archetype selection)_ and click on _Next >_.\\n\\nNext screen, enter the _Group ID_ and _Artifact ID_ of our project then click _Finish_.\\n\\nGroup Id: `io.kauri.tutorials.java-ethereum`\\n\\nArtifact Id: `java-ethereum`\\n\\n![](https://imgur.com/IpEZ6gX.png)\\n\\nIt should result of a new project in the _Project Explorer_\\n\\n![](https://imgur.com/7uiey3U.png)\\n\\n### 2. Configure our project to use Java 8\\n\\nFinally, we need to tell Eclipse and Maven to use Java version 8.\\n\\nEdit the file `pom.xml` and add the following lines before `</project>`\\n\\n```xml\\n  <properties>\\n    <maven.compiler.target>1.8</maven.compiler.target>\\n    <maven.compiler.source>1.8</maven.compiler.source>\\n  </properties>\\n```\\n\\nNow, right click on the project name in the _Project Explorer_ and click on _Maven > Update Project_. Click _OK_ in the dialog box that pops up.\\n\\nIn the _Project Explorer_, You should see the _JRE System library_ changing from **JavaSE-1.5** to **JavaSE-1.8**.\\n\\n![](https://imgur.com/7Pvq9hJ.png)\\n\\n## Add Web3j library to our project\\n\\nIn this step, we import the latest version of Web3j to our project via maven.\\n\\nIn Eclipse, edit the file `pom.xml` and add the following lines before `</project>`:\\n\\n```xml\\n  <dependencies>\\n    <dependency>\\n      <groupId>org.web3j</groupId>\\n      <artifactId>core</artifactId>\\n      <version>4.3.0</version>\\n    </dependency>\\n  </dependencies>\\n```\\n\\n_Full pom.xml file available [here](https://github.com/gjeanmart/kauri-content/blob/master/java-ethereum/pom.xml)_\\n\\nSave file and dependencies will import. In your package explorer you will see a Maven dependencies folder with all the JAR (Java ARchive) packages for web3j and its dependencies.\\n\\n## Create a Main class\\n\\nNow, we have all the required dependencies to use Web3j, we can start coding our Ethereum Java program.\\n\\nCreate a Java class `Main.java` in your project by right-clicking on the project and selecting _New > Class_.\\nEnter the package name `io.kauri.tutorials.java_ethereum`, the class name `Main` and check _public static void main(String\\\\[] args)_.\\n\\n![](https://imgur.com/iipSbO0.png)\\n\\nClick on _Finish_ to generate the skeleton file.\\n\\n```java\\n//Main.java\\npackage io.kauri.tutorials.java_ethereum;\\n\\npublic class Main {\\n  public static void main(String[] args) {\\n    // TODO Auto-generated method stub\\n  }\\n}\\n```\\n\\n## Connect to an Ethereum node with Web3j.\\n\\nNow we have created our project, imported the Web3j library and prepared a program to run our code. We can now connect to an Ethereum node and start executing operations over the JSON-RPC API abstracted by Web3j.\\n\\n### 1. Add imports\\n\\nFirst import the packages needed for our code, or allow your IDE to automatically import them for you:\\n\\n```java\\nimport java.io.IOException;\\nimport org.web3j.protocol.Web3j;\\nimport org.web3j.protocol.http.HttpService;\\nimport org.web3j.protocol.core.methods.response.EthBlockNumber;\\nimport org.web3j.protocol.core.methods.response.EthGasPrice;\\nimport org.web3j.protocol.core.methods.response.Web3ClientVersion;\\n```\\n\\n### 2. Connect to the node\\n\\nTo connect to the node, Web3j requires the JSON-RPC API endpoint:\\n\\n```java\\nWeb3j web3 = Web3j.build(new HttpService(\\"<NODE ENDPOINT>\\"));\\n```\\n\\n#### Local Ethereum node or ganache-cli\\n\\nIf you are running locally a [Geth](https://geth.ethereum.org/), [Parity](https://www.parity.io/), [Pantheon](https://github.com/PegaSysEng/pantheon) client or [ganache-cli](https://github.com/trufflesuite/ganache-cli). Your node JSON-RPC API endpoint is `http://localhost:8545` by default\\n\\n```java\\nWeb3j web3 = Web3j.build(new HttpService(\\"http://localhost:8545\\"));\\n```\\n\\n#### Ganache application: Local development blockchain\\n\\nIf you are running the [Ganache](https://www.trufflesuite.com/ganache) application on your machine. Your node JSON-RPC API endpoint is `http://localhost:7545` by default. _ganche-cli uses port 8545_\\n\\n```java\\nWeb3j web3 = Web3j.build(new HttpService(\\"http://localhost:7545\\"));\\n```\\n\\n_Note: As a test network, Ganache doesn\'t support all the JSON-RPC API operations specified, for example `net_peercount`._\\n\\n#### Infura: Hosted nodes for public mainet and testnets\\n\\nIf you use [Infura](https://infura.io). The node JSON-RPC API endpoint is `https://<network>.infura.io/v3/<project key>`.\\n\\n```java\\nWeb3j web3 = Web3j.build(new HttpService(\\"https://mainnet.infura.io/v3/<project key>\\"));\\n```\\n\\n### 3. Execute API operations\\n\\nWeb3j implements a JSON-RPC API client for Ethereum which can be used in the following way `<response> = web3.<operation>.send()`. For example:\\n\\n```java\\ntry {\\n  // web3_clientVersion returns the current client version.\\n  Web3ClientVersion clientVersion = web3.web3ClientVersion().send();\\n\\n  //eth_blockNumber returns the number of most recent block.\\n  EthBlockNumber blockNumber = web3.ethBlockNumber().send();\\n\\n  //eth_gasPrice, returns the current price per gas in wei.\\n  EthGasPrice gasPrice =  web3.ethGasPrice().send();\\n\\n} catch(IOException ex) {\\n  throw new RuntimeException(\\"Error whilst sending json-rpc requests\\", ex);\\n}\\n```\\n\\n**Note:** Serilization of the JSON-RPC request can raise an `IOException` exception, so you need to handle it.\\n\\n## Result\\n\\nThe following code shows the entire Java program which connects to an Ethereum node and runs some JSON-RPC calls.\\n\\n```java\\n//Main.java\\npackage io.kauri.tutorials.java_ethereum;\\n\\nimport java.io.IOException;\\n\\nimport org.web3j.protocol.Web3j;\\nimport org.web3j.protocol.core.methods.response.EthBlockNumber;\\nimport org.web3j.protocol.core.methods.response.EthGasPrice;\\nimport org.web3j.protocol.core.methods.response.Web3ClientVersion;\\nimport org.web3j.protocol.http.HttpService;\\n\\npublic class Main {\\n\\n  public static void main(String[] args) {\\n    System.out.println(\\"Connecting to Ethereum ...\\");\\n    Web3j web3 = Web3j.build(new HttpService(\\"http://localhost:8545\\"));\\n    System.out.println(\\"Successfuly connected to Ethereum\\");\\n\\n    try {\\n      // web3_clientVersion returns the current client version.\\n      Web3ClientVersion clientVersion = web3.web3ClientVersion().send();\\n\\n      // eth_blockNumber returns the number of most recent block.\\n      EthBlockNumber blockNumber = web3.ethBlockNumber().send();\\n\\n      // eth_gasPrice, returns the current price per gas in wei.\\n      EthGasPrice gasPrice = web3.ethGasPrice().send();\\n\\n      // Print result\\n      System.out.println(\\"Client version: \\" + clientVersion.getWeb3ClientVersion());\\n      System.out.println(\\"Block number: \\" + blockNumber.getBlockNumber());\\n      System.out.println(\\"Gas price: \\" + gasPrice.getGasPrice());\\n\\n    } catch (IOException ex) {\\n      throw new RuntimeException(\\"Error whilst sending json-rpc requests\\", ex);\\n    }\\n  }\\n}\\n```\\n\\n_Full file available [here](https://github.com/gjeanmart/kauri-content/blob/master/java-ethereum/src/main/java/io/kauri/tutorials/java_ethereum/Main.java)_\\n\\nTo run the program, right-click on the file `Main.java` and click on _Run As > Java Application_. You should see in the console the following result.\\n\\n```shell\\nConnecting to Ethereum ...\\nSuccessfuly connected to Ethereum\\nClient version: Geth/v1.8.22-omnibus-260f7fbd/linux-amd64/go1.11.1\\nBlock number: 7983049\\nGas price: 3000000000\\n```\\n\\n![](https://imgur.com/MWJqowg.gif)\\n\\n## References\\n\\n-   [GitHub Project code](https://github.com/gjeanmart/kauri-content/tree/master/java-ethereum)\\n-   [Web3j website](https://web3j.io/)\\n-   [Web3j documentation](https://web3j.readthedocs.io/en/latest/)\\n-   [Web3j Github repo](https://github.com/web3j/web3j)\\n-   [Ethereum JSON-RPC API](https://github.com/ethereum/wiki/wiki/JSON-RPC)\\n\\n\\n-----------------------------\\n\\n**Next Steps:**\\n\\n- [Manage an Ethereum account with Java and Web3j](https://kauri.io/article/925d923e12c543da9a0a3e617be963b4)\\n- [Generate a Java Wrapper from your Smart Contract](https://kauri.io/article/84475132317d4d6a84a2c42eb9348e4b)\\n- [Interacting with an Ethereum Smart Contract in Java](https://kauri.io/article/14dc434d11ef4ee18bf7d57f079e246e)\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n"}',
                    authorId: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                    dateCreated: '2019-07-19T15:40:19.256Z',
                    datePublished: '2019-07-19T15:40:22.354Z',
                    status: 'PUBLISHED',
                    attributes: {
                        background:
                            'https://api.kauri.io:443/ipfs/QmZjb5Kp3LFcXTVxneoJN3aco6NF91M7TbVfxUq4B4ySsX',
                    },
                    contentHash:
                        'QmdCsaJm7ajyh3ZyxacmSc94FFoBgSPWeWJLLYTCEMUUxf',
                    checkpoint: null,
                    tags: [
                        'ethereum',
                        'java',
                        'maven',
                        'web3j',
                        'json-rpc',
                        'eclipse',
                    ],
                    voteResult: {
                        sum: 0.0,
                        count: 0,
                        hasVoted: null,
                        quantity: {},
                        __typename: 'VoteResultDTO',
                    },
                    author: {
                        id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                        name: 'Grégoire Jeanmart',
                        username: 'gregjeanmart',
                        avatar:
                            'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                        __typename: 'PublicUserDTO',
                    },
                    owner: {
                        id: '5d2f30daaba2920001c82409',
                        name: 'Java Ethereum',
                        avatar:
                            'https://api.kauri.io:443/ipfs/QmQ9to7bfbR6ADTG2tAKVxWTNw8o3YbwJ1LzdpEJeanLBX',
                        resourceIdentifier: {
                            id: '5d2f30daaba2920001c82409',
                            type: 'COMMUNITY',
                            __typename: 'ResourceIdentifier',
                        },
                        __typename: 'CommunityDTO',
                    },
                    contributors: [
                        {
                            id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                            name: 'Grégoire Jeanmart',
                            username: 'gregjeanmart',
                            avatar:
                                'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                            __typename: 'PublicUserDTO',
                        },
                    ],
                    comments: {
                        content: [],
                        totalPages: 0,
                        totalElements: 0,
                        __typename: 'ResponsePage_CommentDTO',
                    },
                    updateComment: null,
                    __typename: 'ArticleDTO',
                },
                {
                    associatedNfts: null,
                    resourceIdentifier: {
                        id: '925d923e12c543da9a0a3e617be963b4',
                        type: 'ARTICLE',
                        __typename: 'ResourceIdentifier',
                        version: 3,
                    },
                    description:
                        'Other articles in this series: - Connecting to an Ethereum client with Java, Eclipse and Web3j - Generate a Java Wrapper from your Smart Contract - Interacting with an Ethereum Smart Contract in Java - Listening for Ethereum Smart Contract Events in Java - Using Pantheon, the Java Ethereum Client with Linux The Ethereum blockchain is often compared to a World Computer with a global state. The global state grows after each new block and cosists of many accounts organised in a Merkle tree. Each ac',
                    id: '925d923e12c543da9a0a3e617be963b4',
                    version: 3,
                    title: 'Manage an Ethereum account with Java and Web3j',
                    content:
                        '{"markdown":"**Other articles in this series:**\\n- [Connecting to an Ethereum client with Java, Eclipse and Web3j](https://kauri.io/article/b9eb647c47a546bc95693acc0be72546)\\n- [Generate a Java Wrapper from your Smart Contract](https://kauri.io/article/84475132317d4d6a84a2c42eb9348e4b)\\n- [Interacting with an Ethereum Smart Contract in Java](https://kauri.io/article/14dc434d11ef4ee18bf7d57f079e246e)\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n\\n-------------------------------------------\\n\\nThe Ethereum blockchain is often compared to a World Computer with a global state. The global state grows after each new block and cosists of many accounts organised in a [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree).\\n\\n![](https://imgur.com/iQLdaOW.png)\\n\\nEach account has a state composed of information such as balance, nonce, storageRoot and codeHash, and is identified by a 20 bytes address (for example: `0x66aac71c0c81ec00aebead84914a10e307a4cbf9`).\\n\\nThere are two types of accounts:\\n\\n-   **Externally owned accounts**, which are controlled by private keys and have no code associated with them.\\n-   **Contract accounts**, which are controlled by their contract code and have code associated with them.\\n\\n![](https://imgur.com/3dlka35.png)\\n\\nIn this tutorial, we focus on externally owned accounts and how to retrieve information such as a balance, create or open an account and send transactions to another account using the Java library [Web3j](https://web3j.io/).\\n\\n## 1. Retrieve public information about an account\\n\\nThe Ethereum blockchain is a public shared ledger which we can query to retrieve information about the state at a different time, or block number.\\n\\n### Get account\'s balance\\n\\nEvery account has a balance of the Ethereum native cryptocurrency called **Ether**. Using our Web3j instance (see [article-1](#)), it is possible to retrieve the balance of an account at a given block using the function `web3.ethGetBalance(<accountAddress>, <blockNo>).send()`\\n\\nThe balance is stored by default in the smallest denomination of ether called _wei_ (1 ether = 10^18 wei) but Web3j provides a convenience utility class `Convert` to convert values between different units.\\n\\n-   Retrieve the latest balance (latest block) of an account:\\n\\n```java\\nEthGetBalance balanceWei = web3.ethGetBalance(\\"0xF0f15Cedc719B5A55470877B0710d5c7816916b1\\", DefaultBlockParameterName.LATEST).send();\\nSystem.out.println(\\"balance in wei: \\" + balanceWei);\\n\\nBigDecimal balanceInEther = Convert.fromWei(balanceWei.getBalance().toString(), Unit.ETHER);\\nSystem.out.println(\\"balance in ether: \\" + balanceInEther);\\n```\\n\\n![](https://imgur.com/S7w0eEH.png)\\n\\nIn the example above, the latest balance of the account `0xF0f15Cedc719B5A55470877B0710d5c7816916b1` is _33.25 ether_.\\n\\n-   Retrieve the balance of an account at a specific block, if the blockchain you connect to has generated any blocks so far. Test chains may not have yet:\\n\\n```java\\nEthGetBalance balance = web3.ethGetBalance(\\"0xF0f15Cedc719B5A55470877B0710d5c7816916b1\\", new DefaultBlockParameterNumber(3000000)).send();\\n\\nBigDecimal balanceInEther = Convert.fromWei(balance.getBalance().toString(), Unit.ETHER);\\n```\\n\\n![](https://imgur.com/PuUtKHV.png)\\n\\nThe balance at block #3,000,000 of the account `0xF0f15Cedc719B5A55470877B0710d5c7816916b1` is _8.12 ethers_.\\n\\n### Get account\'s nonce\\n\\nAlso included in the state of an account is the _nonce_, a sequence number symbolizing the number of transactions performed by an account.\\n\\nWeb3j provides the method `web3.ethGetTransactionCount(<accountAddress>, <blockNo>).send()` to retrieve the nonce at a given block number, in this case the most recent block.\\n\\n```java\\nEthGetTransactionCount ethGetTransactionCount = web3.ethGetTransactionCount(\\"0xF0f15Cedc719B5A55470877B0710d5c7816916b1\\", DefaultBlockParameterName.LATEST).send();\\n\\nBigInteger nonce =  ethGetTransactionCount.getTransactionCount();\\n```\\n\\n![](https://imgur.com/uJ2bcNk.png)\\n\\n## 2. Open or create an account\\n\\nIn order to control an externally owned account and the fund allocated on it, the 32 bytes **Private Key** associated to an account is needed. A private key is a confidential piece of information, so it usually doesn\'t come in clear text like `3a1076bf45ab87712ad64ccb3b10217737f7faacbf2872e88fdd9a537d8fe266` but is secured and encrypted in a wallet. There are many forms of wallets (more or less secured and practical):\\n\\n![](https://imgur.com/N74l0TI.png)\\n\\n![](https://imgur.com/m4JjJsM.png)\\n\\n![](https://imgur.com/X8mANUY.png)\\n\\nIn this section, we learn how to load an existing wallet and create a new one with Web3j to instanciate a `Credentials` object which we can use to sign and send transactions securely on the Ethereum blockchain.\\n\\n### Load a wallet\\n\\n#### From a JSON encryted keystore\\n\\nThe first form of wallet is the JSON encryted keystore, which is a password-encrypted version of the private key. This is the most standard way used by clients such as [Pantheon](https://pegasys.tech/) or [Geth](https://geth.ethereum.org/), but also by online tools like [MyEtherWallet](https://www.myetherwallet.com/) to secure a private key from potential attackers.\\n\\nWeb3j provides a utility class called `WalletUtils` to load a wallet into a `Credentials` object (wrapper containing the account address and the keypair).\\n\\n```java\\nString walletPassword = \\"secr3t\\";\\nString walletDirectory = \\"/path/to/wallets\\";\\nString walletName = \\"UTC--2019-06-20T08-55-56.200000000Z--fd7d68e16ef61868f3e325fafdf2fc1ec0b77649.json\\";\\n\\n// Load the JSON encryted wallet\\nCredentials credentials = WalletUtils.loadCredentials(walletPassword, walletDirectory + \\"/\\" + walletName);\\n\\n// Get the account address\\nString accountAddress = credentials.getAddress();\\n\\n// Get the unencrypted private key into hexadecimal\\nString privateKey = credentials.getEcKeyPair().getPrivateKey().toString(16);\\n```\\n\\n![](https://imgur.com/p92p616.png)\\n\\n#### From a Mnemonic phrase\\n\\nAnother common form of private key is the **Mnemonic sentence** (or seed phrase) which converts the 32 bytes key to a group of 12 easy to remember words. For example: `candy maple cake sugar pudding cream honey rich smooth crumble sweet treat`. This form was established by Bitcoin under the proposal [BIP39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki).\\n\\nA mnemonic controls multiple private keys because of a mechanism to derive deterministically the mnemonic from a path.\\n\\nWe can optionally encrypt the mnemonic with a password.\\n\\n```java\\nString password = null; // no encryption\\nString mnemonic = \\"candy maple cake sugar pudding cream honey rich smooth crumble sweet treat\\";\\n\\nCredentials credentials = WalletUtils.loadBip39Credentials(password, mnemonic);\\n```\\n\\n![](https://imgur.com/xN2Ruaj.png)\\n\\nBy default, Web3j uses a derivation path equal to `m/44\'/60\'/0\'/1` (read [this article](https://medium.com/myetherwallet/hd-wallets-and-derivation-paths-explained-865a643c7bf2) to understand _derivation path_). However, it is possible to open another account on a different path:\\n\\n```java\\nString password = null; // no encryption\\nString mnemonic = \\"candy maple cake sugar pudding cream honey rich smooth crumble sweet treat\\";\\n\\n//Derivation path wanted: // m/44\'/60\'/0\'/0\\nint[] derivationPath = {44 | Bip32ECKeyPair.HARDENED_BIT, 60 | Bip32ECKeyPair.HARDENED_BIT, 0 | Bip32ECKeyPair.HARDENED_BIT, 0,0};\\n\\n// Generate a BIP32 master keypair from the mnemonic phrase\\nBip32ECKeyPair masterKeypair = Bip32ECKeyPair.generateKeyPair(MnemonicUtils.generateSeed(mnemonic, password));\\n\\n// Derived the key using the derivation path\\nBip32ECKeyPair  derivedKeyPair = Bip32ECKeyPair.deriveKeyPair(masterKeypair, derivationPath);\\n\\n// Load the wallet for the derived key\\nCredentials credentials = Credentials.create(derivedKeyPair);\\n```\\n\\n![](https://imgur.com/eEgEdOY.png)\\n\\n#### From a Private key\\n\\nAs mentioned before, a private key is a 32 bytes long number. To parse a private key with Web3j, we need to pass the private key to the class `Credentials`.\\n\\n```java\\nString pk = \\"c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3\\";\\n\\nCredentials credentials = Credentials.create(pk);\\n```\\n\\n![](https://imgur.com/svlvLnF.png)\\n\\n### Create a wallet\\n\\nFinally, if we don\'t already have an account and want to create a new one from scratch. Web3j\'s `WalletUtils` offers a method to create a JSON encrypted keystore.\\n\\n```java\\nString walletPassword = \\"secr3t\\";\\nString walletDirectory = \\"/path/to/destination/\\";\\n\\nString walletName = WalletUtils.generateNewWalletFile(password, new File(directory));\\nSystem.out.println(\\"wallet location: \\" + directory + \\"/\\" + walletName);\\n\\n\\nCredentials credentials = WalletUtils.loadCredentials(password, directory + \\"/\\" + walletName);\\n\\nString accountAddress = credentials.getAddress();\\nSystem.out.println(\\"Account address: \\" + credentials.getAddress());\\n```\\n\\n![](https://imgur.com/kbcemsH.png)\\n\\n## 3. Send a transaction\\n\\nNow we have learned how to retrieve public information (state), like the balance from an account and how to open an account using different methods, we can send a transaction to another account.\\n\\nA transaction on the Ethereum blockchain is composed of the following information:\\n\\n-   **nonce:** a count of the number of transaction sent by the sender.\\n-   **gasPrice (in wei):** the amount the sender is willing to pay per unit of gas required to execute the transaction.\\n-   **gasLimit:** the maximum amount of gas the sender is willing to pay to execute this transaction.\\n-   **to:** The address of the recipient account.\\n-   **value (in wei):** the amount of Wei to transfer from the sender to the recipient. In a contract-creating transaction, this value serves as the starting balance within the newly created contract account.\\n-   **signature:** Cryptographic signature that identified the sender of the transaction (from).\\n-   **data:** Optional field used to communicate with a smart contract (encoded string including the function name and the parameters).\\n\\nThere are two ways to send a transaction to the blockchain:\\n\\n-   **Via the Ethereum node:**\\n    This involves sending a non-signed transaction to the Ethereum client having the account _unlocked_.\\n    **_I personnaly don\'t recommend this method which might put your account at risk if the Ethereum node isn\'t correctly protected_**\\n\\n-   **Offline transaction:**\\n    The concept is to first construct the transaction object `rawTransaction` and sign it with a private key (Web3j Credential). Secondly send it to the Ethereum node via the JSON-RPC API to propagate across the network.\\n\\nOnce a transaction is broadcast to the network, a transaction hash is returned to the client but the transaction isn\'t performed yet. A set of miners/validators present on the network pick up all the pending transactions, group them into the next block and agree on the validity. Once verified, the transaction is mined into the new block. At this point, the client can claim a transaction receipt by transaction hash to aknowledge the good execution of his transaction.\\n\\n![](https://web3j.readthedocs.io/en/latest/_images/web3j_transaction.png)\\n\\n### Send funds from one account to another\\n\\n#### 1. Load an account and get the nonce\\n\\nAs explained in the previous sections, we need to load an account from one the methods and retrieve the nonce value of this account:\\n\\n```java\\nString walletPassword = \\"secr3t\\";\\nString walletPath = \\"/path/to/wallet/UTC--2019-06-20T11-41-39.478000000Z--256c75c85f9c27ac5b2a22f085d9643f7ed91dc1.json\\";\\n\\n// Decrypt and open the wallet into a Credential object\\nCredentials credentials = WalletUtils.loadCredentials(walletPassword, walletPath);\\n\\n// Get nonce\\nEthGetTransactionCount ethGetTransactionCount = web3.ethGetTransactionCount(credentials.getAddress(), DefaultBlockParameterName.LATEST).send();\\nBigInteger nonce =  ethGetTransactionCount.getTransactionCount();\\n```\\n\\n#### 2. Configure recipient account and amount to send\\n\\nIn the next step, we configure the amount (in Wei) to send to a recipient account.\\n\\n```java\\n// Recipient account\\nString recipientAddress = \\"0xDD6325C45aE6fAbD028D19fa1539663Df14813a8\\";\\n\\n// Value to Transfer\\nBigInteger value = Convert.toWei(\\"1\\", Unit.ETHER).toBigInteger();\\n```\\n\\n#### 3. Configure Gas parameters\\n\\nGas represents the fees of the network which taken by the miner who mines the block which includes your transaction.\\n\\nWhen sending a transaction, two parameters are important:\\n\\n-   **Gas Limit (in unit):** Gas limit refers to the maximum amount of gas you\'re willing to spend on a particular transaction. After the transaction is executed, if too much gas (`gasLimit`) was sent, the remaining gas is refunded to the sender.\\n\\n-   **Gas Price (in wei):** Amount of Ether you\'re willing to pay for every unit of gas\\n\\n```java\\n// A transfer cost 21,000 units of gas\\nBigInteger gasLimit = BigInteger.valueOf(21000);\\n\\n// I am willing to pay 1Gwei (1,000,000,000 wei or 0.000000001 ether) for each unit of gas consumed by the transaction.\\nBigInteger gasPrice = Convert.toWei(\\"1\\", Unit.GWEI).toBigInteger();\\n```\\n\\n#### 4. Prepare the raw transaction\\n\\nA raw transaction for a transfer of funds contains all the transaction data fields except:\\n\\n-   **data**: not a smart contract transaction\\n-   **signature**: signature not signed yet\\n\\n```java\\n// Prepare the rawTransaction\\nRawTransaction rawTransaction  = RawTransaction.createEtherTransaction(\\n\\tnonce,\\n\\tgasPrice,\\n\\tgasLimit,\\n\\trecipientAddress,\\n\\tvalue);\\n```\\n\\n#### 5. Signature\\n\\nThe signing part requires the `rawTransaction` as well as the `credentials` (keypair) used to cryptographically sign the transaction.\\n\\n```java\\n// Sign the transaction\\nbyte[] signedMessage = TransactionEncoder.signMessage(rawTransaction, credentials);\\n\\n// Convert it to Hexadecimal String to be sent to the node\\nString hexValue = Numeric.toHexString(signedMessage);\\n```\\n\\n#### 6. Send to the node via JSON-RPC\\n\\nThe final step consists of sending the transaction signed to the node so it can be verified and broadcast to the network. In case of success, the method returns a response composed of the transaction hash.\\n\\n```java\\n// Send transaction\\nEthSendTransaction ethSendTransaction = web3.ethSendRawTransaction(hexValue).send();\\n\\n// Get the transaction hash\\nString transactionHash = ethSendTransaction.getTransactionHash();\\n```\\n\\n#### 7. Wait for the transaction to be mined.\\n\\nAs explained before, when the signed transaction is propagated to the network, depending on many factors (gas price, network congestion) it can take some time to see the transaction mined and added to the last block.\\n\\nThat\'s why the following code consists of a simple loop to verify every 3 seconds if the transaction is mined by calling the method `web3.ethGetTransactionReceipt(<txhash>).send()`.\\n\\n```java\\n// Wait for transaction to be mined\\nOptional<TransactionReceipt> transactionReceipt = null;\\ndo {\\n  EthGetTransactionReceipt ethGetTransactionReceiptResp = web3.ethGetTransactionReceipt(transactionHash).send();\\n  transactionReceipt = ethGetTransactionReceiptResp.getTransactionReceipt();\\n\\n  Thread.sleep(3000); // Retry after 3 sec\\n} while(!transactionReceipt.isPresent());\\n```\\n\\n#### Result\\n\\nHere is the full version of the code including everything explained in this article:\\n\\n```java\\n// Transaction.java\\npackage io.kauri.tutorials.java_ethereum;\\n\\nimport java.io.IOException;\\nimport java.math.BigInteger;\\nimport java.util.Optional;\\n\\nimport org.web3j.crypto.Credentials;\\nimport org.web3j.crypto.RawTransaction;\\nimport org.web3j.crypto.TransactionEncoder;\\nimport org.web3j.protocol.Web3j;\\nimport org.web3j.protocol.core.DefaultBlockParameterName;\\nimport org.web3j.protocol.core.methods.response.EthGetTransactionCount;\\nimport org.web3j.protocol.core.methods.response.EthGetTransactionReceipt;\\nimport org.web3j.protocol.core.methods.response.EthSendTransaction;\\nimport org.web3j.protocol.core.methods.response.TransactionReceipt;\\nimport org.web3j.protocol.http.HttpService;\\nimport org.web3j.utils.Convert;\\nimport org.web3j.utils.Convert.Unit;\\nimport org.web3j.utils.Numeric;\\n\\npublic class Transaction {\\n\\n  public static void main(String[] args)  {\\n\\n    System.out.println(\\"Connecting to Ethereum ...\\");\\n    Web3j web3 = Web3j.build(new HttpService(\\"https://rinkeby.infura.io/v3/083836b2784f48e19e03487eb3209923\\"));\\n    System.out.println(\\"Successfuly connected to Ethereum\\");\\n\\n    try {\\n      String pk = \\"CHANGE_ME\\"; // Add a private key here\\n\\n      // Decrypt and open the wallet into a Credential object\\n      Credentials credentials = Credentials.create(pk);\\n      System.out.println(\\"Account address: \\" + credentials.getAddress());\\n      System.out.println(\\"Balance: \\" + Convert.fromWei(web3.ethGetBalance(credentials.getAddress(), DefaultBlockParameterName.LATEST).send().getBalance().toString(), Unit.ETHER));\\n\\n      // Get the latest nonce\\n      EthGetTransactionCount ethGetTransactionCount = web3.ethGetTransactionCount(credentials.getAddress(), DefaultBlockParameterName.LATEST).send();\\n      BigInteger nonce =  ethGetTransactionCount.getTransactionCount();\\n\\n      // Recipient address\\n      String recipientAddress = \\"0xAA6325C45aE6fAbD028D19fa1539663Df14813a8\\";\\n\\n      // Value to transfer (in wei)\\n      BigInteger value = Convert.toWei(\\"1\\", Unit.ETHER).toBigInteger();\\n\\n      // Gas Parameters\\n      BigInteger gasLimit = BigInteger.valueOf(21000);\\n      BigInteger gasPrice = Convert.toWei(\\"1\\", Unit.GWEI).toBigInteger();\\n\\n      // Prepare the rawTransaction\\n      RawTransaction rawTransaction  = RawTransaction.createEtherTransaction(\\n                 nonce,\\n                 gasPrice,\\n                 gasLimit,\\n                 recipientAddress,\\n                 value);\\n\\n      // Sign the transaction\\n      byte[] signedMessage = TransactionEncoder.signMessage(rawTransaction, credentials);\\n      String hexValue = Numeric.toHexString(signedMessage);\\n\\n      // Send transaction\\n      EthSendTransaction ethSendTransaction = web3.ethSendRawTransaction(hexValue).send();\\n      String transactionHash = ethSendTransaction.getTransactionHash();\\n      System.out.println(\\"transactionHash: \\" + transactionHash);\\n\\n      // Wait for transaction to be mined\\n      Optional<TransactionReceipt> transactionReceipt = null;\\n      do {\\n        System.out.println(\\"checking if transaction \\" + transactionHash + \\" is mined....\\");\\n            EthGetTransactionReceipt ethGetTransactionReceiptResp = web3.ethGetTransactionReceipt(transactionHash).send();\\n            transactionReceipt = ethGetTransactionReceiptResp.getTransactionReceipt();\\n            Thread.sleep(3000); // Wait 3 sec\\n      } while(!transactionReceipt.isPresent());\\n\\n      System.out.println(\\"Transaction \\" + transactionHash + \\" was mined in block # \\" + transactionReceipt.get().getBlockNumber());\\n      System.out.println(\\"Balance: \\" + Convert.fromWei(web3.ethGetBalance(credentials.getAddress(), DefaultBlockParameterName.LATEST).send().getBalance().toString(), Unit.ETHER));\\n\\n\\n    } catch (IOException | InterruptedException ex) {\\n      throw new RuntimeException(ex);\\n    }\\n  }\\n}\\n```\\n\\n![](https://imgur.com/8XU21KA.gif)\\n\\nNow we understand the core principles behind sending transactions with Web3j, I can tell you a secret. Web3j provides a Utility class called \'Transfer\' which takes care of everything (nonce, gas, transaction receipt polling, etc.) in one line of code.\\n\\n```java\\nTransactionReceipt receipt = Transfer.sendFunds(web3, credentials, recipientAddress, BigDecimal.valueOf(1), Unit.ETHER).send();\\n```\\n\\n## Summary\\n\\nIn this article, we learnt that the Ethereum Global State is composed of a mapping of all accounts states. We can query each account state can be queried to get information like the balance and the nonce.\\n\\nAn account is controlled by the person owning the private key of this account. The private key can have many forms and is usually secured in a wallet. Web3j allows to open a wallet from a JSON encrypted file, a mnemonic phrase or directly from the private key.\\n\\nTo send a transaction between two accounts, Web3j can generate a transaction oject, sign it and propagate it to the network to poll the Blockchain to get the transaction receipt when it\'s been mined.\\n\\n## Resources\\n\\n-   [Ethereum Unit converter (WEI, GWEI, ETHER, ....)](https://etherconverter.online/)\\n-   [Web3j Transaction doc](https://web3j.readthedocs.io/en/latest/transactions.html#transaction-signing-via-an-ethereum-client)\\n-   [Web3j RawTransaction Integration Tests](https://github.com/web3j/web3j/blob/master/integration-tests/src/test/java/org/web3j/protocol/scenarios/CreateRawTransactionIT.java)\\n-   [Ethereum - What is Gas Price and Limit](https://masterthecrypto.com/ethereum-what-is-gas-gas-limit-gas-price/)\\n-   [Diving into Ethereum World State](https://medium.com/cybermiles/diving-into-ethereums-world-state-c893102030ed)\\n\\n\\n-------------------------------------------\\n\\n**Next Steps:**\\n- [Generate a Java Wrapper from your Smart Contract](https://kauri.io/article/84475132317d4d6a84a2c42eb9348e4b)\\n- [Interacting with an Ethereum Smart Contract in Java](https://kauri.io/article/14dc434d11ef4ee18bf7d57f079e246e)\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)"}',
                    authorId: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                    dateCreated: '2019-07-19T15:42:45.466Z',
                    datePublished: '2019-07-19T15:42:48.882Z',
                    status: 'PUBLISHED',
                    attributes: {
                        background:
                            'https://api.kauri.io:443/ipfs/QmTyEg3Lq2Bf2anauJnHcGtHiAJZ71kAbY2quL7jXZeWkh',
                    },
                    contentHash:
                        'QmcN9cYEESs859Fkd2dEvfZNf6uy1VuuqZ6cS9dar3TnbK',
                    checkpoint: null,
                    tags: ['ethereum', 'java', 'balance', 'web3j', 'account'],
                    voteResult: {
                        sum: 0.0,
                        count: 0,
                        hasVoted: null,
                        quantity: {},
                        __typename: 'VoteResultDTO',
                    },
                    author: {
                        id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                        name: 'Grégoire Jeanmart',
                        username: 'gregjeanmart',
                        avatar:
                            'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                        __typename: 'PublicUserDTO',
                    },
                    owner: {
                        id: '5d2f30daaba2920001c82409',
                        name: 'Java Ethereum',
                        avatar:
                            'https://api.kauri.io:443/ipfs/QmQ9to7bfbR6ADTG2tAKVxWTNw8o3YbwJ1LzdpEJeanLBX',
                        resourceIdentifier: {
                            id: '5d2f30daaba2920001c82409',
                            type: 'COMMUNITY',
                            __typename: 'ResourceIdentifier',
                        },
                        __typename: 'CommunityDTO',
                    },
                    contributors: [
                        {
                            id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                            name: 'Grégoire Jeanmart',
                            username: 'gregjeanmart',
                            avatar:
                                'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                            __typename: 'PublicUserDTO',
                        },
                    ],
                    comments: {
                        content: [],
                        totalPages: 0,
                        totalElements: 0,
                        __typename: 'ResponsePage_CommentDTO',
                    },
                    updateComment: null,
                    __typename: 'ArticleDTO',
                },
                {
                    associatedNfts: null,
                    resourceIdentifier: {
                        id: '84475132317d4d6a84a2c42eb9348e4b',
                        type: 'ARTICLE',
                        __typename: 'ResourceIdentifier',
                        version: 3,
                    },
                    description:
                        'Other articles in this series: - Connecting to an Ethereum client with Java, Eclipse and Web3j - Manage an Ethereum account with Java and Web3j - Interacting with an Ethereum Smart Contract in Java - Listening for Ethereum Smart Contract Events in Java - Using Pantheon, the Java Ethereum Client with Linux In this article, we discover how to generate a Java Wrapper Class directly from a smart contract to interact with a smart contract in Java. There are different methods to generate a Java Wrappe',
                    id: '84475132317d4d6a84a2c42eb9348e4b',
                    version: 3,
                    title: 'Generate a Java Wrapper from your Smart Contract',
                    content:
                        "{\"markdown\":\"\\n\\n**Other articles in this series:**\\n- [Connecting to an Ethereum client with Java, Eclipse and Web3j](https://kauri.io/article/b9eb647c47a546bc95693acc0be72546)\\n- [Manage an Ethereum account with Java and Web3j](https://kauri.io/article/925d923e12c543da9a0a3e617be963b4)\\n- [Interacting with an Ethereum Smart Contract in Java](https://kauri.io/article/14dc434d11ef4ee18bf7d57f079e246e)\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n\\n-------------------------------------------\\n\\n\\nIn this article, we discover how to generate a [Java Wrapper Class](https://www.baeldung.com/java-wrapper-classes) directly from a smart contract to interact with a smart contract in Java.\\n\\nThere are different methods to generate a Java Wrapper Class from a Smart Contract:\\n\\n-   The [Web3j Command Line tool](https://web3j.readthedocs.io/en/latest/command_line.html) and solc\\n-   The Web3j Command Line tool and the artifacts generated by a Truffle build\\n-   The [web3j-maven-plugin](https://github.com/web3j/web3j-maven-plugin)\\n-   The [web3j-gradle-plugin](https://github.com/web3j/web3j-gradle-plugin)\\n\\nTo show how to use the methods above, this tutorial uses the following Smart Contract which notarizes documents into a registry on the Ethereum Blockchain.\\n\\n_DocumentRegistry.sol_\\n\\n```solidity\\npragma solidity ^0.5.6;\\n\\n\\n/**\\n*  @dev Smart Contract responsible to notarize documents on the Ethereum Blockchain\\n*/\\ncontract DocumentRegistry {\\n\\n  struct Document {\\n      address signer; // Notary\\n      uint date; // Date of notarization\\n      bytes32 hash; // Document Hash\\n  }\\n\\n  /**\\n   *  @dev Storage space used to record all documents notarized with metadata\\n   */\\n  mapping(bytes32 => Document) registry;\\n\\n  /**\\n   *  @dev Notarize a document identified by its 32 bytes hash by recording the hash, the sender and date in the registry\\n   *  @dev Emit an event Notarized in case of success\\n   *  @param _documentHash Document hash\\n   */\\n  function notarizeDocument(bytes32 _documentHash) external returns (bool) {\\n    registry[_documentHash].signer = msg.sender;\\n    registry[_documentHash].date = now;\\n    registry[_documentHash].hash = _documentHash;\\n\\n    emit Notarized(msg.sender, _documentHash);\\n\\n    return true;\\n  }\\n\\n  /**\\n   *  @dev Verify a document identified by its hash was noterized in the registry.\\n   *  @param _documentHash Document hash\\n   *  @return bool if document was noterized previsouly in the registry\\n   */\\n  function isNotarized(bytes32 _documentHash) external view returns (bool) {\\n    return registry[_documentHash].hash ==  _documentHash;\\n  }\\n\\n  /**\\n   *  @dev Definition of the event triggered when a document is successfully notarized in the registry\\n   */\\n  event Notarized(address indexed _signer, bytes32 _documentHash);\\n}\\n```\\n\\n## Method 1 - Web3j Command Line tool and solc\\n\\nThis first method generates the Smart contract ABI and bytecode from with `solc` and gives those two files as input to `web3j-cli` to generate the Wrapper.\\n\\n### 1. Install solc and verify the version\\n\\n[Install solc](https://solidity.readthedocs.io/en/develop/installing-solidity.html) and run the command below to make sure the solc version is greater than or equal to `0.5.6` (the version specified in the smart contract).\\n\\n```shell\\n$ solc --version\\nsolc, the solidity compiler commandline interface\\nVersion: 0.5.9+commit.c68bc34e.Linux.g++\\n```\\n\\n### 2. Install web3j-cli\\n\\nTo install the web3j-cli, download a zipfile/tarball from the [releases](https://github.com/web3j/web3j/releases/latest) page of the project repository, under the **Downloads** section, or for macOS users via [Homebrew](https://github.com/web3j/homebrew-web3j), or for Arch linux users via the [AUR](https://aur.archlinux.org/packages/web3j/).\\n\\n```bash\\nbrew tap web3j/web3j\\nbrew install web3j\\nweb3j\\n```\\n\\nTo run via a zipfile, extract it and run the binary, you may also want to add the binary to your `PATH`:\\n\\n```shell\\n$ unzip web3j-4.3.0.zip\\n    creating: web3j-4.3.0/lib/\\n    inflating: web3j-4.3.0/lib/core-1.0.2-all.jar\\n    creating: web3j-4.3.0/bin/\\n    inflating: web3j-4.3.0/bin/web3j\\n    inflating: web3j-4.3.0/bin/web3j.bat\\n$ ./web3j-<version>/bin/web3j\\n\\n                _      _____ _     _\\n            | |    |____ (_)   (_)\\n__      _____| |__      / /_     _   ___\\n\\\\ \\\\ /\\\\ / / _ \\\\ '_ \\\\     \\\\ \\\\ |   | | / _ \\\\\\n\\\\ V  V /  __/ |_) |.___/ / | _ | || (_) |\\n    \\\\_/\\\\_/ \\\\___|_.__/ \\\\____/| |(_)|_| \\\\___/\\n                        _/ |\\n                        |__/\\n\\nUsage: web3j version|wallet|solidity ...\\n```\\n\\n### 3. Compile the smart contract with solc\\n\\nGiven our Solidity file _DocumentRegistry.sol_, the `solc <sol> --bin --abi --optimize -o <output>` command compiles the smart contract and generates two new files in the same directory :\\n\\n```shell\\n$ solc DocumentRegistry.sol --bin --abi --optimize -o ./\\nCompiler run successful. Artifact(s) can be found in directory ./.\\n\\n$ ls -l\\ntotal 12\\n-rw-rw-r-- 1 gjeanmart gjeanmart  565 Jun 24 13:42 DocumentRegistry.abi\\n-rw-rw-r-- 1 gjeanmart gjeanmart  676 Jun 24 13:42 DocumentRegistry.bin\\n-rw-rw-r-- 1 gjeanmart gjeanmart 1488 Jun 24 13:40 DocumentRegistry.sol\\n```\\n\\n-   _DocumentRegistry.bin_: Binary file, bytecode of the smart contract\\n-   _DocumentRegistry.abi_: ABI (Application Binary Interface) of the smart contract which defines the interface in a JSON format.\\n\\n### 4. Generate the Wrapper with the web3j-cli\\n\\nUsing the ABI and bytecode (generated in step 3) and `web3j-cli` (installed during step 2), we can now generate our Smart contract Java Wrapper with the following command:\\n\\n```shell\\nweb3j solidity generate -a=<abiFile> -b=<binFile> -o=<destinationFileDir> -p=<packageName>\\n```\\n\\nFor example:\\n\\n```shell\\n$ web3j solidity generate -a DocumentRegistry.abi  -b DocumentRegistry.bin -o . -p me.gjeanmart.tutorials.javaethereum.wrapper\\n\\n              _      _____ _     _\\n             | |    |____ (_)   (_)\\n__      _____| |__      / /_     _   ___\\n\\\\ \\\\ /\\\\ / / _ \\\\ '_ \\\\     \\\\ \\\\ |   | | / _ \\\\\\n \\\\ V  V /  __/ |_) |.___/ / | _ | || (_) |\\n  \\\\_/\\\\_/ \\\\___|_.__/ \\\\____/| |(_)|_| \\\\___/\\n                         _/ |\\n                        |__/\\n\\nGenerating me.gjeanmart.tutorials.javaethereum.wrapper.DocumentRegistry ... File written to .\\n```\\n\\nAs a result, you should see the Java Wrapper file generated into the folder _<package-folders>/<contract>.java_ that you can copy to the _src/main/java/_ folder of your project.\\n\\n```shell\\n./me/gjeanmart/tutorials/javaethereum/wrapper/DocumentRegistry.java\\n```\\n\\n## Method 2 - Web3j Command Line tool and Truffle artefacts\\n\\n[**Truffle**](https://www.trufflesuite.com/truffle) is one of the most well-known frameworks to help you develop, test and deploy with Ethereum. We can use the artefacts that Truffle generates with the Web3j command line tool to create the wrapper class.\\n\\n### 1. Install Truffle\\n\\nTruffle is available as an npm package.\\n\\n```shell\\n$ npm install truffle -g\\n- Fetching solc version list from solc-bin. Attempt #1\\n+ truffle@5.0.24\\nadded 27 packages from 439 contributors in 11.636s\\n\\n$ truffle version\\nTruffle v5.0.24 (core: 5.0.24)\\nSolidity v0.5.0 (solc-js)\\nNode v10.15.3\\nWeb3.js v1.0.0-beta.37\\n```\\n\\n### 2. Initialize a new Truffle project\\n\\nTo initialize a Truffle project, use the command `truffle init` in a new folder. The command creates the folders _contracts/_, _migration/_ and _test/_, and the file _truffle-config.js_.\\n\\n```shell\\n$ mkdir truffle\\n$ cd truffle\\n$ truffle init\\n\\n? Preparing to download\\n? Downloading\\n? Cleaning up temporary files\\n? Setting up box\\n\\nUnbox successful. Sweet!\\n\\nCommands:\\n\\n  Compile:        truffle compile\\n  Migrate:        truffle migrate\\n  Test contracts: truffle test\\n\\n$ ls -l\\ntotal 20\\ndrwxrwxr-x 2 gjeanmart gjeanmart 4096 Jun 24 14:25 contracts\\ndrwxrwxr-x 2 gjeanmart gjeanmart 4096 Jun 24 14:25 migrations\\ndrwxrwxr-x 2 gjeanmart gjeanmart 4096 Jun 24 14:25 test\\n-rw-rw-r-- 1 gjeanmart gjeanmart 4233 Jun 24 14:25 truffle-config.js\\n```\\n\\n### 3. Add the contract into the folder `contracts`\\n\\nCopy the Smart Contract source _DocumentRegistry.sol_ into the folder _contracts_.\\n\\n### 4. Compile the contract\\n\\nCompile the smart contract with the command `truffle compile`, this command generates a new folder _build/contracts/_, containing a Truffle artefact for each Smart contract compiled.\\n\\n```shell\\n$ truffle compile\\n\\nCompiling your contracts...\\n===========================\\n> Compiling ./contracts/DocumentRegistry.sol\\n> Compiling ./contracts/Migrations.sol\\n> Artifacts written to /home/gjeanmart/workspace/tutorials/java-ethereum-wrapper/truffle/build/contracts\\n> Compiled successfully using:\\n   - solc: 0.5.8+commit.23d335f2.Emscripten.clang\\n\\n$ ls -l build/contracts/\\ntotal 136\\n-rw-rw-r-- 1 gjeanmart gjeanmart 79721 Jun 24 14:33 DocumentRegistry.json\\n-rw-rw-r-- 1 gjeanmart gjeanmart 54043 Jun 24 14:33 Migrations.json\\n```\\n\\n### 5. Generate the Smart Contract Java Wrapper from the Truffle Artefact\\n\\nFinally, web3j-cli provides a method to generate the Wrapper directly from the Truffle artefact result of `truffle compile` with the command:\\n\\n```shell\\n$ web3j  truffle generate ./build/contracts/DocumentRegistry.json -o . -p me.gjeanmart.tutorials.javaethereum.wrapper\\n\\n              _      _____ _     _\\n             | |    |____ (_)   (_)\\n__      _____| |__      / /_     _   ___\\n\\\\ \\\\ /\\\\ / / _ \\\\ '_ \\\\     \\\\ \\\\ |   | | / _ \\\\\\n \\\\ V  V /  __/ |_) |.___/ / | _ | || (_) |\\n  \\\\_/\\\\_/ \\\\___|_.__/ \\\\____/| |(_)|_| \\\\___/\\n                         _/ |\\n                        |__/\\n\\nGenerating me.gjeanmart.tutorials.javaethereum.wrapper.DocumentRegistry ... File written to .\\n```\\n\\nAs a result, you should see the Java Wrapper file generated into the folder _&lt;package_folders>/<contract>.java_ that you can copy to the _src/main/java/_ folder of your project.\\n\\n```shell\\n./me/gjeanmart/tutorials/javaethereum/wrapper/DocumentRegistry.java\\n```\\n\\n**Note**: With Truffle you can do a lot more than shown in this post, such as deployment scriptd (migration), Multi-network configuration, testing, debugging. I recommend reading [the following guide](https://kauri.io/collection/5b8e401ee727370001c942e3) to learn more about all the features.\\n\\n## Method 3 - web3j-maven-plugin\\n\\nThe next solution is more elegant than the previous two because we don't have to install the webj-cli and copy the file to the source folder. We can use this method directly inside a Java project using Maven and the [**web3j-maven-plugin**](https://github.com/web3j/web3j-maven-plugin). The following steps assume you have created a Maven project.\\n\\n### 1. Prerequisites\\n\\n[Install solc](https://solidity.readthedocs.io/en/develop/installing-solidity.html) and run the command below to make sure the solc version is greater than or equal to `0.5.6` (the version specified in the smart contract).\\n\\n```shell\\n$ solc --version\\nsolc, the solidity compiler commandline interface\\nVersion: 0.5.9+commit.c68bc34e.Linux.g++\\n```\\n\\n### 2. Copy the smart contract into the folder _src/main/resources_\\n\\nCopy the Smart Contract source _DocumentRegistry.sol_ into the _src/main/resources_ folder of the Maven project.\\n\\n### 3. Configure Maven to generate the Wrapper during the `generate-sources` phase\\n\\nIn this step, we configure two Maven plugins:\\n\\n#### web3j-maven-plugin\\n\\nThe first plugin does the same as the two previous methods but integrated with Maven. First we configure the plugin to execute automatically when entering the `generate-sources` phase of the project.\\n\\nSecondly we configure the plugin parameters:\\n\\n-   _packageName_: Package name to apply to the generated Wrapper classes\\n-   _sourceDestination_: Target destination folder to move the generated Wrapper classes\\n-   _soliditySourceFiles_: Where to find the Smart Contract source files\\n\\n#### build-helper-maven-plugin\\n\\nThe second plugin adds the _sourceDestination_ folder into the classpath so we can import the generated Wrapper classes\\n\\n_pom.xml_\\n\\n```xml\\n<build>\\n    <plugins>\\n        <plugin>\\n            <groupId>org.web3j</groupId>\\n            <artifactId>web3j-maven-plugin</artifactId>\\n            <version>4.2.0</version>\\n            <executions>\\n                <execution>\\n                    <id>generate-sources-web3j</id>\\n                    <phase>generate-sources</phase>\\n                    <goals>\\n                        <goal>generate-sources</goal>\\n                    </goals>\\n                    <configuration>\\n                        <packageName>me.gjeanmart.tutorials.javaethereum.contracts.generated</packageName>\\n                        <sourceDestination>${basedir}/target/generated-sources/contracts</sourceDestination>\\n                        <soliditySourceFiles>\\n                            <directory>${basedir}/src/main/resources</directory>\\n                            <includes>\\n                                <include>**/*.sol</include>\\n                            </includes>\\n                        </soliditySourceFiles>\\n                    </configuration>\\n                </execution>\\n            </executions>\\n        </plugin>\\n\\n        <plugin>\\n            <groupId>org.codehaus.mojo</groupId>\\n            <artifactId>build-helper-maven-plugin</artifactId>\\n            <executions>\\n                <execution>\\n                    <id>add-source</id>\\n                    <phase>generate-sources</phase>\\n                    <goals>\\n                        <goal>add-source</goal>\\n                    </goals>\\n                    <configuration>\\n                        <sources>\\n                            <source>${basedir}/target/generated-sources/contracts</source>\\n                        </sources>\\n                    </configuration>\\n                </execution>\\n            </executions>\\n        </plugin>\\n    </plugins>\\n</build>\\n```\\n\\n### 4. Run Maven generate-sources\\n\\nFinally, build the Maven project by using, for example `mvn clean package` (including the generate-sources phase). As a result, we can see the Java Wrapper has been generated into `/target/generated-sources/contracts/me/gjeanmart/tutorials/javaethereum/contracts/generated/DocumentRegistry.java` and added to the classpath automatically.\\n\\n![](https://imgur.com/nBMOWGq.png)\\n\\n## Method 4 - web3j-gradle-plugin\\n\\nThe last method is similar to the previous method with Maven, but using Gradle instead.\\n\\n### 1. Prerequisites\\n\\n[Install solc](https://solidity.readthedocs.io/en/develop/installing-solidity.html) and run the command below to make sure the solc version is greater than or equal to `0.5.6` (the version specified in the smart contract).\\n\\n```shell\\n$ solc --version\\nsolc, the solidity compiler commandline interface\\nVersion: 0.5.9+commit.c68bc34e.Linux.g++\\n```\\n\\n### 2. Place the smart contract into the folder _src/main/solidity_\\n\\nCopy the Smart Contract source _DocumentRegistry.sol_ into the folder _src/main/solidity_ of the Gradle project.\\n\\n### 3. Configure Gradle to generate the Wrapper during build\\n\\nFirst import the web3j-gradle plugin into the _build.gradle_ file\\n\\n```groovy\\nplugins {\\n    id 'org.web3j' version '4.3.0'\\n}\\n```\\n\\nThen we can configure the plugin to specify the package name and the target folder for the generated wrapper classes:\\n\\n```groovy\\nweb3j {\\n    generatedPackageName = 'me.gjeanmart.tutorials.javaethereum.contracts.generated'\\n    generatedFilesBaseDir = \\\"$buildDir/contracts\\\"\\n}\\n```\\n\\nTo use your system installed version of `solc` instead of the version bundled with the plugin, add the following lines to _build.gradle_:\\n\\n```groovy\\nsolidity {\\n    executable = \\\"solc\\\"\\n}\\n```\\n\\n_build.gradle_\\n\\n```groovy\\n/*\\n * This file was generated by the Gradle 'init' task.\\n *\\n * This generated file contains a sample Java Library project to get you started.\\n * For more details take a look at the Java Libraries chapter in the Gradle\\n * user guide available at https://docs.gradle.org/5.0/userguide/java_library_plugin.html\\n */\\n\\nplugins {\\n    // Apply the java-library plugin to add support for Java Library\\n    id 'java-library'\\n    id 'org.web3j' version '4.3.0'\\n}\\n\\nrepositories {\\n    // Use jcenter for resolving your dependencies.\\n    // You can declare any Maven/Ivy/file repository here.\\n    jcenter()\\n}\\n\\ndependencies {\\n    // This dependency is exported to consumers, that is to say found on their compile classpath.\\n    api 'org.apache.commons:commons-math3:3.6.1'\\n\\n    // This dependency is used internally, and not exposed to consumers on their own compile classpath.\\n    implementation 'com.google.guava:guava:26.0-jre'\\n    implementation 'org.web3j:core:4.3.0'\\n\\n    // Use JUnit test framework\\n    testImplementation 'junit:junit:4.12'\\n}\\n\\nweb3j {\\n    generatedPackageName = 'me.gjeanmart.tutorials.javaethereum.contracts.generated'\\n    generatedFilesBaseDir = \\\"$buildDir/contracts\\\"\\n}\\n\\nsolidity {\\n    executable = \\\"solc\\\"\\n}\\n```\\n\\n### 4. Execute gradle build\\n\\nIn this last step, we execute the build using `./gradlew tasks --all` and verify that our generated wrapper classes have been generated.\\n\\n![](https://imgur.com/dA0sVy1.png)\\n\\n\\n-------------------------------------------\\n\\n**Next Steps:**\\n- [Interacting with an Ethereum Smart Contract in Java](https://kauri.io/article/14dc434d11ef4ee18bf7d57f079e246e)\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n\"}",
                    authorId: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                    dateCreated: '2019-07-19T15:45:43.967Z',
                    datePublished: '2019-07-19T15:45:46.562Z',
                    status: 'PUBLISHED',
                    attributes: {
                        background:
                            'https://api.kauri.io:443/ipfs/QmTfBi56eSEH6PnX1fK7aYsQWv6Tq4mja1KH3Yxk8NFzJ5',
                    },
                    contentHash:
                        'QmQA9Ef7EpyQtbGuxxfL4z4YE5UqPPk7bkbgT1aQQV1Zt1',
                    checkpoint: null,
                    tags: [
                        'smart-contract',
                        'ethereum',
                        'java',
                        'web3j',
                        'wrapper',
                        'solidity',
                    ],
                    voteResult: {
                        sum: 0.0,
                        count: 0,
                        hasVoted: null,
                        quantity: {},
                        __typename: 'VoteResultDTO',
                    },
                    author: {
                        id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                        name: 'Grégoire Jeanmart',
                        username: 'gregjeanmart',
                        avatar:
                            'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                        __typename: 'PublicUserDTO',
                    },
                    owner: {
                        id: '5d2f30daaba2920001c82409',
                        name: 'Java Ethereum',
                        avatar:
                            'https://api.kauri.io:443/ipfs/QmQ9to7bfbR6ADTG2tAKVxWTNw8o3YbwJ1LzdpEJeanLBX',
                        resourceIdentifier: {
                            id: '5d2f30daaba2920001c82409',
                            type: 'COMMUNITY',
                            __typename: 'ResourceIdentifier',
                        },
                        __typename: 'CommunityDTO',
                    },
                    contributors: [
                        {
                            id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                            name: 'Grégoire Jeanmart',
                            username: 'gregjeanmart',
                            avatar:
                                'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                            __typename: 'PublicUserDTO',
                        },
                    ],
                    comments: {
                        content: [],
                        totalPages: 0,
                        totalElements: 0,
                        __typename: 'ResponsePage_CommentDTO',
                    },
                    updateComment: null,
                    __typename: 'ArticleDTO',
                },
                {
                    associatedNfts: null,
                    resourceIdentifier: {
                        id: '14dc434d11ef4ee18bf7d57f079e246e',
                        type: 'ARTICLE',
                        __typename: 'ResourceIdentifier',
                        version: 6,
                    },
                    description:
                        'Other articles in this series: - Connecting to an Ethereum client with Java, Eclipse and Web3j - Manage an Ethereum account with Java and Web3j - Generate a Java Wrapper from your Smart Contract - Listening for Ethereum Smart Contract Events in Java - Using Pantheon, the Java Ethereum Client with Linux In this tutorial, you will learn how to deploy a smart contract using the Web3j java library, along with how to interact with the functions of the smart contract. As a prerequisite, you should be',
                    id: '14dc434d11ef4ee18bf7d57f079e246e',
                    version: 6,
                    title:
                        'Interacting with an Ethereum Smart Contract in Java',
                    content:
                        '{"markdown":"\\n**Other articles in this series:**\\n- [Connecting to an Ethereum client with Java, Eclipse and Web3j](https://kauri.io/article/b9eb647c47a546bc95693acc0be72546)\\n- [Manage an Ethereum account with Java and Web3j](https://kauri.io/article/925d923e12c543da9a0a3e617be963b4)\\n- [Generate a Java Wrapper from your Smart Contract](https://kauri.io/article/84475132317d4d6a84a2c42eb9348e4b)\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n\\n-------------------------------------------\\n\\nIn this tutorial, you will learn how to deploy a smart contract using the Web3j java library, along with how to interact with the functions of the smart contract.\\n\\nAs a prerequisite, you should be familiar with [account management](https://kauri.io/article/925d923e12c543da9a0a3e617be963b4/manage-an-ethereum-account-with-java-and-web3j) and contract java wrapper generation as described in the [previous article](https://kauri.io/article/84475132317d4d6a84a2c42eb9348e4b/generate-a-java-wrapper-from-your-smart-contract) in this series.  For continuity, we will deploy the same `DocumentRegistry` smart contract.\\n\\n_DocumentRegistry.sol_\\n\\n``` solidity\\npragma solidity ^0.5.6;\\n\\n\\n/**\\n*  @dev Smart Contract resposible to notarize documents on the Ethereum Blockchain\\n*/\\ncontract DocumentRegistry {\\n\\n    struct Document {\\n        address signer; // Notary\\n        uint date; // Date of notarization\\n        string hash; // Document Hash\\n    }\\n\\n    /**\\n     *  @dev Storage space used to record all documents notarized with metadata\\n     */\\n    mapping(bytes32 => Document) registry;\\n\\n    /**\\n     *  @dev Notarize a document identified by the hash of the document hash, the sender and date in the registry\\n     *  @dev Emit an event Notarized in case of success\\n     *  @param _documentHash Document hash\\n     */\\n    function notarizeDocument(string calldata _documentHash) external returns (bool) {\\n        bytes32 id = keccak256(abi.encodePacked(_documentHash));\\n\\n        registry[id].signer = msg.sender;\\n        registry[id].date = now;\\n        registry[id].hash = _documentHash;\\n\\n        emit Notarized(msg.sender, _documentHash);\\n\\n        return true;\\n    }\\n\\n    /**\\n     *  @dev Verify a document identified by its has was noterized in the registry previsouly.\\n     *  @param _documentHash Document hash\\n     *  @return bool if document was noterized previsouly in the registry\\n     */\\n    function isNotarized(string calldata _documentHash) external view returns (bool) {\\n        return registry[keccak256(abi.encodePacked(_documentHash))].signer != address(0);\\n    }\\n\\n    /**\\n     *  @dev Definition of the event triggered when a document is successfully notarized in the registry\\n     */\\n    event Notarized(address indexed _signer, string _documentHash);\\n}\\n```\\n\\n## A Brief Primer on Mining and Gas\\n\\n### Mining\\n\\nAny interactions with the Ethereum network that update EVM state must be triggered by a transaction that is broadcast to the blockchain.  Some example interactions include sending Ether to another account, deploying a smart contract and some smart contract function invocations.\\n\\nMiners are entities that secure the Ethereum network by constantly attempting to calculate the answer to a complex mathematical puzzle, a mechanism called Proof-of-Work consensus.\\n\\nIt is the job of miners to gather a bundle of pending transactions (from the mempool) and create a block that includes these transactions.  Once a transaction is included within a mined block, it is considered executed, and any related state changes will be applied.\\n\\n### Gas\\n\\nEther, the native cryptocurrency of Ethereum, is paid by the transaction sender to the miner that included the transaction within a block.  This is one of the ways that miners are incentivized.\\n\\nGas is a unit of computational work within the Ethereum network, and the amount of Ether paid whilst executing a transaction depends on how much gas is consumed, along with the `gasPrice` transaction attribute, which defines how much Ether the sender will pay per gas unit consumed.  Its important to understand that different transactions will require differing amounts of gas, depending on the operation, with each transaction costing a minimum of 21,000 gas.\\n\\nIt is also possible to define the absolute maximum amount of gas that a transaction sender is willing to consume in order to execute the transaction, by specifying the `gasLimit` attribute.\\n\\n## Deploying\\n\\nThe ability to deploy immutable smart contracts that live indefinitely is the secret sauce of Ethereum!  Smart contracts are pieces of code with functions that can be executed by any interested parties.  They live as bytecode within the network but are usually written in a language such as [Solidity](https://solidity.readthedocs.io/en) or [Vyper](https://vyper.readthedocs.io), then encoded and deployed.\\n\\nBy far the easiest way to deploy the `DocumentRegistry` smart contract is to use a wrapper that has been generated by Web3j.   This wrapper provides a native java class representation of the smart contract.  Two (non deprecated) `deploy` methods that can be used to deploy the code to the Ethereum network are provided:\\n\\n``` java\\npublic static RemoteCall<DocumentRegistry> deploy(Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider)\\n```\\n``` java\\npublic static RemoteCall<DocumentRegistry> deploy(Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider)\\n```\\n\\nThe latter allows the `TransactionManager` to be specified; an object which controls how Web3j connects to an Ethereum client.  We\'re happy to use the default `RawTransactionManager` in this example, so we\'ll use the former method, which takes wallet `Credentials` as an argument.  We must also create a `ContractGasProvider`, which provides the gas price and gas limit for the transaction; indirectly specifying how much the contract will cost to deploy, in Ether.\\n\\n_DocumentRegistry Deployment Code_\\n``` java\\n//Create credentials from private key\\nCredentials creds = Credentials.create(\\"0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63\\");\\n\\nDocumentRegistry registryContract = DocumentRegistry.deploy(web3j, creds, new DefaultGasProvider()).send();\\n\\nString contractAddress = registryContract.getContractAddress();\\n```\\nThe `deploy` method returns a `RemoteCall` object.  Calling `send()` on the `RemoteCall` synchronously deploys the smart contract to the Ethereum network, and returns an instance of `DocumentRegistry` which is linked to this deployed code.  Every deployed smart contract has a unique Ethereum address associated with it, and this address can be accessed by calling the `getContractAddress()` method on the contract wrapper, after deployment.\\n\\nIn this snippet, the credentials are constructed from a hard coded private key (for address 0xfe3b557e8fb62b89f4916b721be55ceb828dbd73).  This is fine for testing and demonstration purposes, but a production implementation should never hard code a private key, because an attacker will be able to take control of your account.  One approach to overcome this is to set the key as an environment variable on your server, and load this in your code.\\n\\nThe provided `DefaultGasProvider` is used in this example, which sets the gas price and limit to hard coded values, but a custom version can be built by implementing the below interface:\\n\\n``` java\\npublic interface ContractGasProvider {\\n    BigInteger getGasPrice(String contractFunc);\\n\\n    @Deprecated\\n    BigInteger getGasPrice();\\n\\n    BigInteger getGasLimit(String contractFunc);\\n\\n    @Deprecated\\n    BigInteger getGasLimit();\\n}\\n```\\n\\n## Creating a Wrapper Instance for an Already Deployed Contract\\nMore often than not, the smart contract that you want to interact with will already be deployed to the Ethereum network.  In this scenario, the static `load(..)` method can be used:\\n``` java\\npublic static DocumentRegistry load(String contractAddress, Web3j web3j, Credentials credentials, ContractGasProvider contractGasProvider)\\n```\\n``` java\\npublic static DocumentRegistry load(String contractAddress, Web3j web3j, TransactionManager transactionManager, ContractGasProvider contractGasProvider)\\n```\\n\\nFor example, if our `DocumentRegistry` is deployed with the address `0x10c7dc2b84b6c8e6df5a749655830e70adca3a2b`, we can obtain a java wrapper for the deployed contract as follows:\\n\\n``` java\\n//Create credentials from private key\\nCredentials creds = Credentials.create(\\"0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63\\");\\n\\nDocumentRegistry registryContract = DocumentRegistry.load(web3j, creds, new DefaultGasProvider());\\n```\\n## Invoking a Smart Contract Function\\n\\n### Transactions vs Calls\\n\\nA smart contract function can be invoked in 2 different ways, depending on the behaviour of the function.  \\n\\n#### Transactions\\n\\nTo invoke a smart contract function that can potentially change contract state (adding / updating / deleting a value), a transaction must be broadcast to the Ethereum network.  The function invocation details such as function name and argument values are encoded in the data field of a transaction in a well known format, and much like a regular Ether value transaction, the invocation will consume gas.  \\n\\nA miner must choose to include the transaction within a block in order for the function invocation to take place, so therefore transaction executions are asynchronous in nature.  After broadcasting the transaction, a unique hash is returned, which can then be used to request a transaction receipt from the Ethereum client (once it has been included within a block).\\n\\nFor a detailed explanation of Ethereum transactions, see [this guide](https://medium.com/blockchannel/life-cycle-of-an-ethereum-transaction-e5c66bae0f6e).\\n\\n#### Calls\\n\\nA call is local to the Ethereum client that your service is connected to, and does not broadcast anything to the wider Ethereum network.  Because of this, a contract call is free to execute; they do not consume any gas. However, call operations are read only, meaning that any state changes that occur within the smart contract function are not persisted and are rolled back after execution.  There is no mining involved, so executions are synchronous.\\n\\n### Using the Contract Wrapper\\n\\nAs was true for deploying, invoking a function using a Web3j generated contract wrapper is by far the easiest approach.  The tricky data encoding is encapsulated and handled for you under the covers.  \\n\\nA java method is generated that corresponds to each function within your smart contract.  Web3j establishes if the function should be invoked via a transaction or call automatically, at wrapper generation, based on the keywords of the function.  For example, a function definition that includes the `view` or `pure` keywords will be executed via a call, otherwise its assumed that there will be some potential state changes, and a transaction approach is used.\\n\\n#### Invoking `notarizeDocument(..)`\\nIn our `DocumentRegistry` example smart contract, the `notarizeDocument(..)` function stores the document details in the smart contract state and should therefore be triggered via a transaction in an asynchronous manner.  The generated function signature is:\\n\\n``` java\\npublic RemoteCall<TransactionReceipt> notarizeDocument(String _documentHash)\\n```\\nInterestingly, even though behind the scenes, a transaction is asynchronously broadcast to the network and included within a block, Web3j handles the transaction receipt polling on your behalf, and so the remote call returned by this method is actually synchronous and blocks until the transaction has been mined, subsequently returning the transaction receipt .  If this behaviour is not desired within your application, you will have to either send a transaction manually without the help of the wrapper, or make the remote call on a different thread.\\n\\nSo calling the `notarizeDocument` function is made very simple with the wrapper, and looks like this:\\n\\n``` java\\nDocumentRegistry documentRegistry = deployDocumentRegistryContract();\\nTransactionReceipt receipt = documentRegistry.notarizeDocument(\\n        \\"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco\\").send();\\n\\nString txHash = receipt.getTransactionHash();\\n```\\n\\nA `TransactionException` is thrown if the transaction fails.\\n\\n#### Invoking `isNotarized(..)`\\nAs this function is marked as a `view` function, this indicates that it is read-only and can therefore be called locally.  The generated method signature is:\\n\\n``` java\\npublic RemoteCall<Boolean> isNotarized(String _documentHash)\\n```\\nThis method is quite similar to the `notarizeDocument(..)` method, with one major difference;  the returned `RemoteCall` is of `Boolean` type and not `TransactionReceipt`.  This is because a transaction was not sent, and instead the return value of the smart contract function (`bool` in this case, converted to `Boolean`) is returned synchronously.\\n\\n### Manual Transaction Sending\\nIf for some reason, using the smart contract wrapper is not desirable, Web3j provides a number of helper classes to simplify the process of broadcasting a function invocation transaction, such as encoding the data field of the transaction, and the signing process.\\n\\n_Manual Transaction Sending Code_\\n``` java\\nFunction function = new Function(\\"notarizeDocument\\",\\n                Arrays.asList(new Utf8String(\\"QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco\\")), Collections.emptyList());\\n\\n//Encode function values in transaction data format\\nString txData = FunctionEncoder.encode(function);\\n\\nTransactionManager txManager = new FastRawTransactionManager(web3j, creds);\\n\\nString txHash = txManager.sendTransaction(DefaultGasProvider.GAS_PRICE, DefaultGasProvider.GAS_LIMIT,\\n                documentRegistry.getContractAddress(), txData, BigInteger.ZERO).getTransactionHash();\\n```\\n\\n- First a `Function` object is created.  This defines the `notarizeDocument` function call, and contains the function name, a list of input arguments (Web3j provides java equivalents of all solidity smart contract types), and a list of return types (empty in our case).\\n\\n- Next, the `FunctionEncoder` is used to encode the function call definition into the transaction data field format. The actual encoding is out of scope for this article, but details can be found [here](https://solidity.readthedocs.io/en/develop/abi-spec.html) if interested.\\n\\n- A `TransactionManager` is constructed, which which will be used to build and sign the transaction, and broadcast to the Ethereum network. We use a `FastRawTransactionManager` in this case, which supports multiple transactions per block, and takes `Web3j` and `Credentials` objects as arguments. \\n\\n- Once we have a transaction manager and encoded data, invoking the `notarizeDocument` function is simply a matter of calling the `sendTransaction` method of the transaction manager.  Behind the scenes this will construct a transaction object, and signing it with the private key defined in the `Credentials` and then broadcast the transaction to the Ethereum network via the connected client.  Whereas it was the job of the `GasProvider` to set the gas values in the wrapper case, we much specify them manually with this method.  We have used default values in this example but you can change these values as you wish.  As its possible for a smart contract function to receive Ether during the invocation (a `payable` function), the last argument can be used to specify the amount of Ether (in the smallest denomination, `wei`) that should be sent from the sender account to the smart contract.  No Ether should be transferred in our case, so the value is set to zero.\\n\\n#### Obtaining the TransactionReceipt\\nYou\'ve probably noticed that the `sendTransaction` method in the code above, returns a transaction hash, and not a transaction receipt.  This is because of the asynchronous nature of transaction processing that has been mentioned earlier in this guide.  Luckily, web3j also provides a simple way to poll the network and wait until the transaction has been included within a block by a miner, the `TransactionReceiptProcessor`:\\n\\n``` java\\nTransactionReceiptProcessor receiptProcessor =\\n                new PollingTransactionReceiptProcessor(web3j, TransactionManager.DEFAULT_POLLING_FREQUENCY,\\n                        TransactionManager.DEFAULT_POLLING_ATTEMPTS_PER_TX_HASH);\\n\\nTransactionReceipt txReceipt = receiptProcessor.waitForTransactionReceipt(txHash);\\n```\\n## Summary\\nIn this guide you have learnt how to perform some of the most common interactions with the Ethereum blockchain in java, namely deploying a smart contract and then invoking functions on this contract via both transactions and calls.  Using the generated smart contract java wrappers are by far the easiest way to perform these tasks, but there are other options if you require more granularity.  Congratulations, you\'re well on your way to becoming a proficient Ethereum java developer!\\n\\nIn the next article in this series, we will walk you through how to [listen for emitted smart contract events](https://kauri.io/article/760f495423db42f988d17b8c145b0874/listening-for-ethereum-smart-contract-events-in-java).\\n\\n\\n-------------------------------------------\\n\\n**Next Steps:**\\n- [Listening for Ethereum Smart Contract Events in Java](https://kauri.io/article/760f495423db42f988d17b8c145b0874)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n\\n\\n\\n"}',
                    authorId: '4d91838268f6d6d4e590e8fd2a001cd91c32e7a4',
                    dateCreated: '2019-07-19T17:17:59.619Z',
                    datePublished: '2019-07-19T17:18:04.060Z',
                    status: 'PUBLISHED',
                    attributes: {
                        background:
                            'https://api.kauri.io:443/ipfs/QmQBqEvUaNN7ByVMSPrpa2Tw1mMGCCNPYyfai7Z6WE6Fwr',
                    },
                    contentHash:
                        'QmR4YmtcjJaKEmLJuwJ8CgJ8BaHFE2LvmQW5Dr979ZTUsG',
                    checkpoint: null,
                    tags: ['ethereum', 'java', 'web3j', 'smart-contracts'],
                    voteResult: {
                        sum: 0.0,
                        count: 0,
                        hasVoted: null,
                        quantity: {},
                        __typename: 'VoteResultDTO',
                    },
                    author: {
                        id: '4d91838268f6d6d4e590e8fd2a001cd91c32e7a4',
                        name: 'Craig Williams',
                        username: 'craig',
                        avatar:
                            'https://api.beta.kauri.io:443/ipfs/QmekAbiDvz3Bc5y4pZB7Gnk5Zgn5iaa5CxQoSmTsDoPkP9',
                        __typename: 'PublicUserDTO',
                    },
                    owner: {
                        id: '5d2f30daaba2920001c82409',
                        name: 'Java Ethereum',
                        avatar:
                            'https://api.kauri.io:443/ipfs/QmQ9to7bfbR6ADTG2tAKVxWTNw8o3YbwJ1LzdpEJeanLBX',
                        resourceIdentifier: {
                            id: '5d2f30daaba2920001c82409',
                            type: 'COMMUNITY',
                            __typename: 'ResourceIdentifier',
                        },
                        __typename: 'CommunityDTO',
                    },
                    contributors: [
                        {
                            id: '4d91838268f6d6d4e590e8fd2a001cd91c32e7a4',
                            name: 'Craig Williams',
                            username: 'craig',
                            avatar:
                                'https://api.beta.kauri.io:443/ipfs/QmekAbiDvz3Bc5y4pZB7Gnk5Zgn5iaa5CxQoSmTsDoPkP9',
                            __typename: 'PublicUserDTO',
                        },
                        {
                            id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                            name: 'Grégoire Jeanmart',
                            username: 'gregjeanmart',
                            avatar:
                                'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                            __typename: 'PublicUserDTO',
                        },
                    ],
                    comments: {
                        content: [],
                        totalPages: 0,
                        totalElements: 0,
                        __typename: 'ResponsePage_CommentDTO',
                    },
                    updateComment: null,
                    __typename: 'ArticleDTO',
                },
                {
                    associatedNfts: null,
                    resourceIdentifier: {
                        id: '760f495423db42f988d17b8c145b0874',
                        type: 'ARTICLE',
                        __typename: 'ResourceIdentifier',
                        version: 4,
                    },
                    description:
                        'Other articles in this series: - Connecting to an Ethereum client with Java, Eclipse and Web3j - Manage an Ethereum account with Java and Web3j - Generate a Java Wrapper from your Smart Contract - Interacting with an Ethereum Smart Contract in Java - Using Pantheon, the Java Ethereum Client with Linux What is a Smart Contract Event You can emit an event from any smart contract function triggered by a transaction, and they are an important piece of the Ethereum application architecture puzzle. Th',
                    id: '760f495423db42f988d17b8c145b0874',
                    version: 4,
                    title:
                        'Listening for Ethereum Smart Contract Events in Java',
                    content:
                        '{"markdown":"\\n**Other articles in this series:**\\n- [Connecting to an Ethereum client with Java, Eclipse and Web3j](https://kauri.io/article/b9eb647c47a546bc95693acc0be72546)\\n- [Manage an Ethereum account with Java and Web3j](https://kauri.io/article/925d923e12c543da9a0a3e617be963b4)\\n- [Generate a Java Wrapper from your Smart Contract](https://kauri.io/article/84475132317d4d6a84a2c42eb9348e4b)\\n- [Interacting with an Ethereum Smart Contract in Java](https://kauri.io/article/14dc434d11ef4ee18bf7d57f079e246e)\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n\\n-------------------------------------------\\n\\n\\n## What is a Smart Contract Event\\n\\nYou can emit an event from any smart contract function triggered by a transaction, and they are an important piece of the Ethereum application architecture puzzle.\\n\\nThese events consist of a name and up to 17 arguments, with the content of these arguments provided by the emitting function.  Arguments can either be indexed or non-indexed; with indexed arguments allowing for efficient off-chain querying.\\n\\n> For example, if event X contains an indexed string argument Y, off-chain I can retrieve all events where Y == \\"foo\\", using a filter. (More on filters later)\\n\\nEvents are stored as logs rather than within EVM storage, and because of this, they have properties that you should be aware of:\\n\\n-   **Not accessible from within a smart contract:** Although smart contract functions emit events, smart contracts cannot access this event information after emission.  This is true for both the emitting contract and any other external contract. Therefore, you cannot use events for cross-contract communication.\\n\\n-   **Events are cheap!:** As events are stored as logs, they are cheap compared to the traditional approach of updating the EVM storage state.  The exact cost depends on the event specification and the size of the data within the event.\\n\\n## Common Uses for Events\\n\\n### Asynchronous Off-chain Triggers\\n\\nMost enterprise Java developers are familiar with the Event Bus pattern, where events are published to a queue such as RabbitMQ or Amazon SQS.  This pattern allows services that are interested in specific events to consume them off the bus asynchronously, and perform further processing, without any coupling between the publisher and consumer services.\\n\\n_The Event Bus Pattern_\\n![](https://api.dev.kauri.io:443/ipfs/QmUwbWrK2kgPz2RpwghveWcgRQsH1BSiQhHtam6hFpxp1J)\\n\\nServices can use Ethereum smart contract events in a similar way, with the Ethereum network acting as a kind of messaging queue.  Off-chain services can register an event filter with a node, and will subsequently be notified each time this event is emitted in the Ethereum network.  You can then use these event notifications as a trigger for further off-chain processing, such as updating a NoSQL based cache of the smart contract state.\\n\\n_Ethereum as an \'Event Bus\'_\\n![](https://api.dev.kauri.io:443/ipfs/QmaMerpsdaU6xMT7QfJpfCa8ttZa9DuiGDrQaA7GzRiY9d)\\n\\n### Cheap Data Storage for Off-chain Consumption\\n\\nAs I mentioned above, storing data within an event rather than in EVM contract storage is significantly cheaper.\\n\\n> Diving a little bit into the specifics in order to compare, saving 32 bytes of data to contract storage costs 20,000 gas, whereas emitting an event costs 375 plus 375 for each indexed argument, and an additional 8 gas per byte of data.\\n\\nDue to these cost savings, it\'s a common pattern to store data never read by an on-chain smart contract function soley in an event, not in contract storage.\\n\\nAn example of a scenario where this may be the case, is a notary service where an IPFS hash is committed to the Ethereum blockchain in order to prove date of creation.  After an event has been emitted which contains the IPFS hash of the document, you can verify the timestamp of the notarisation off-chain if there is a dispute by querying the contract events, not the contract state.\\n\\n## Defining and Emitting an Event\\n\\nBoth defining and emitting and event within your Ethereum smart contracts are one liners:\\n\\n### Defining\\n\\n```solidity\\nevent Notarized(address indexed notary, string documentHash)\\n```\\n\\nIn this example we defined an event with the name `Notarized`, with an indexed address argument, `notary`,  and a single non-indexed string parameter, `documentHash`.\\n\\n### Emitting\\n\\n```solidity\\nfunction notarizeDocument(string _documentHash) public {\\n        emit Notarized(msg.sender, _documentHash);\\n}\\n```\\n\\nThe emit keyword fires an event, with arguments passed to the event in a way that is similar to function invocation.  Here, the notary address is set as the transaction sender address via `msg.sender`, and the `documentHash` is the same as the called function argument.\\n\\n## Listening for Emitted Events with Web3j\\n\\nBy far the easiest way to listen for Ethereum smart contract events using web3j is to use the contract wrapper feature of the library.  For a primer on the wrapper feature, see the previous post in this series [http://todo.com](here).\\n\\nThe below code snippet connects to a local Ethereum node and listens for all Notarized events emitted from a deployed Notary contract:\\n\\n```java\\nWeb3j web3j = Web3j.build(new HttpService(\\"http://localhost:8545\\"));\\n\\n//Deploys a notary contract via wrapper\\nfinal Notary notaryContract = deployNotaryContract(web3j);\\n\\nnotaryContract\\n        .notarizedEventFlowable(DefaultBlockParameterName.EARLIEST, DefaultBlockParameterName.LATEST)\\n        .subscribe(event -> {\\n            final String notary = event.notary;\\n            final String documentHash = event.documentHash;\\n\\n            //Perform processing based on event values\\n        });\\n```\\n\\nThe autogenerated contract wrapper code contains convenience methods for each event defined in your smart contract with the naming pattern `<event-name>EventFlowable`.  This method takes start and end block arguments, and as in this example, using the `DefaultBlockParameterName.LATEST` value instructs web3j to continue listening for events for new blocks indefinitely.  If you require a specific block range, you can use `DefaultBlockParameter.valueOf(BigInteger.valueOf(...))`.  A [Flowable](http://reactivex.io/RxJava/2.x/javadoc/io/reactivex/Flowable.html) object is returned which can then be subscribed to, in order to perform processing logic on emitted events.\\n\\nThis method simplifies the process of event listening, as it automatically converts the raw log messages into an object with fields reflecting the defined event arguments.  Without this, you would have to decode the values yourself, and although web3j provides helper methods for this, things can get complex quickly.\\n\\n### Filtering by Indexed Argument Value\\n\\nSetting an argument of an event as `indexed` faciliates efficient querying of events by that arguments value.  This querying is supported in Web3j by building an `EthFilter` object manually.  Below is the code to listen for events notarized by a specific Ethereum address:\\n\\n```java\\nfinal EthFilter ethFilter = new EthFilter(DefaultBlockParameterName.EARLIEST, DefaultBlockParameterName.LATEST,\\n                notaryContract.getContractAddress());\\n\\nethFilter.addSingleTopic(EventEncoder.encode(notaryContract.NOTARIZED_EVENT));\\nethFilter.addOptionalTopics(\\"0x\\" + TypeEncoder.encode(new Address(\\"0x00a329c0648769a73afac7f9381e08fb43dbea72\\")));\\n\\nnotaryContract\\n        .notarizedEventFlowable(ethFilter)\\n        .subscribe(event -> {\\n            final String notary = event.notary;\\n            final String documentHash = event.documentHash;\\n\\n            //Perform processing based on event values\\n        });\\n```\\n\\nThe `notarizedEventFlowable` is overloaded, and can accept an `EthFilter` as an argument, rather than a block range.  This filter is used to define which events to listen for in a more finely grained way, and is built up with the same block range as was previously passed to the method.\\n\\nThere are also some topics that are set on the filter.  In an Ethereum filter, the first topic is always defined as the keccak hash of the event signature, with the event signature in our case being `\'Notarised(address,string)\'\'`.  This is calculated with the help of the `EventEncoder.encode(..)` method provided by Web3j, along with the event specification, `NOTARIZED_EVENT` that has been auto-generated in the wrapper class.\\n\\nAdditional topics can be added using the `addOptionalTopics(..)` method, and these specify the values of indexed arguments to match against, in the same order as they are defined in the event specification.  Encoding varies slightly based on the type of the argument, but luckily, Web3j provides the `TypeEncoder` class which handles this for us.  In the example provided, we are only listening for events where the `notary` value is the address 0x00a329c0648769a73afac7f9381e08fb43dbea72.\\n\\n## Summary\\nEvents are a great way for backend (and frontend) services to be notified of smart contract changes and interactions in an asynchronous manner, as well a providing a cost effective way of storing data on the Ethereum blockchain that does not need to be consumed by a smart contract.\\n\\nAs with many Ethereum interactions, the smart contract wrappers generated by Web3j are by far the simplest way to subscribe to, and process emitted events in your java backend.\\n\\n\\n-------------------------------------------\\n\\n**Next Steps:**\\n- [Using Pantheon, the Java Ethereum Client with Linux](https://kauri.io/article/276dd27f1458443295eea58403fd6965)\\n"}',
                    authorId: '4d91838268f6d6d4e590e8fd2a001cd91c32e7a4',
                    dateCreated: '2019-07-22T09:10:19.848Z',
                    datePublished: '2019-07-22T09:10:23.268Z',
                    status: 'PUBLISHED',
                    attributes: {
                        background:
                            'https://api.kauri.io:443/ipfs/QmeG7oWJ5J8ZHE2p22Ww3buyAxBgWfkNBTx8Xx761n7gsG',
                    },
                    contentHash:
                        'QmdxeVg9eaWcJfdLrpuSmVpGZTL8Dw9t3Xh1iSZ7Mpe5N6',
                    checkpoint: null,
                    tags: [
                        'ethereum',
                        'java',
                        'web3j',
                        'smart-contracts',
                        'events',
                    ],
                    voteResult: {
                        sum: 0.0,
                        count: 0,
                        hasVoted: null,
                        quantity: {},
                        __typename: 'VoteResultDTO',
                    },
                    author: {
                        id: '4d91838268f6d6d4e590e8fd2a001cd91c32e7a4',
                        name: 'Craig Williams',
                        username: 'craig',
                        avatar:
                            'https://api.beta.kauri.io:443/ipfs/QmekAbiDvz3Bc5y4pZB7Gnk5Zgn5iaa5CxQoSmTsDoPkP9',
                        __typename: 'PublicUserDTO',
                    },
                    owner: {
                        id: '5d2f30daaba2920001c82409',
                        name: 'Java Ethereum',
                        avatar:
                            'https://api.kauri.io:443/ipfs/QmQ9to7bfbR6ADTG2tAKVxWTNw8o3YbwJ1LzdpEJeanLBX',
                        resourceIdentifier: {
                            id: '5d2f30daaba2920001c82409',
                            type: 'COMMUNITY',
                            __typename: 'ResourceIdentifier',
                        },
                        __typename: 'CommunityDTO',
                    },
                    contributors: [
                        {
                            id: '4d91838268f6d6d4e590e8fd2a001cd91c32e7a4',
                            name: 'Craig Williams',
                            username: 'craig',
                            avatar:
                                'https://api.beta.kauri.io:443/ipfs/QmekAbiDvz3Bc5y4pZB7Gnk5Zgn5iaa5CxQoSmTsDoPkP9',
                            __typename: 'PublicUserDTO',
                        },
                        {
                            id: 'f0f15cedc719b5a55470877b0710d5c7816916b1',
                            name: 'Grégoire Jeanmart',
                            username: 'gregjeanmart',
                            avatar:
                                'https://api.dev.kauri.io:443/ipfs/QmXa9LzhDV4wiF9YLsv2Z9CBUaSU6ph8QLNRLTDAUBsrA8',
                            __typename: 'PublicUserDTO',
                        },
                    ],
                    comments: {
                        content: [],
                        totalPages: 0,
                        totalElements: 0,
                        __typename: 'ResponsePage_CommentDTO',
                    },
                    updateComment: null,
                    __typename: 'ArticleDTO',
                },
                {
                    associatedNfts: null,
                    resourceIdentifier: {
                        id: '276dd27f1458443295eea58403fd6965',
                        type: 'ARTICLE',
                        __typename: 'ResourceIdentifier',
                        version: 2,
                    },
                    description:
                        'Toolbelt: Pantheon included! Original photo by Jesse Orrico This is the first article of a 3-part series on installing Pantheon, the Java client for Ethereum: Linux macOS Windows Having some powerful tools in your toolbelt is essential for a Java developer, and one of the crucial tools for an Ethereum blockchain developer is the network client. This is the piece of software that communicates data to and from the blockchain. Among other things, the client: spins up nodes, acts as a peer discovery',
                    id: '276dd27f1458443295eea58403fd6965',
                    version: 2,
                    title:
                        'Using Pantheon, the Java Ethereum Client with Linux',
                    content:
                        '{"markdown":"![Toolbelt: Pantheon included!](https://i.imgur.com/LhdU0DH.jpg)\\nOriginal photo by [Jesse Orrico](https://unsplash.com/@jessedo81?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)\\n\\nThis is the first article of a 3-part series on installing Pantheon, the Java client for Ethereum:\\n\\n1.  [Linux](#)\\n2.  macOS\\n3.  Windows\\n\\nHaving some powerful tools in your toolbelt is essential for a Java developer, and one of the crucial tools for an Ethereum blockchain developer is the network client. This is the piece of software that communicates data to and from the blockchain. Among other things, the client: spins up nodes, acts as a peer discovery agent to see who else is participating in the network and validates and sends transactions.\\n\\nThis guide helps you install and setup this core part you need for programming on Ethereum with Java. Although there are some great networking clients out there, Pantheon is the only one written in Java.\\n\\nPantheon is an open-source, Apache 2.0 licensed Ethereum client written in Java. It is mainnet compatible, has a modular architecture, and has privacy and permissioning features as well as new consensus algorithms.\\n\\nThis is the first of a series of step-by-step guides to install and configure the Pantheon client on Linux/macOS/Windows. This guide focuses on Linux operating system, but you can use many of the commands and steps on macOS with some basic modifications.\\n\\n## Try Pantheon with Docker\\n\\nBefore installing, I would suggest anyone wanting to setup and install Pantheon for the first time to try it out using our [Docker images](http://docs.pantheon.pegasys.tech/en/stable/Getting-Started/Run-Docker-Image/). The requirements to do so are having [Docker installed](https://docs.docker.com/v17.12/install/linux/docker-ce/ubuntu/) and using Linux or macOS.\\nYou can use a single docker command to run a mainnet, local or rinkeby version of Pantheon, and then use [`curl`](https://curl.haxx.se/) or similar tools to get or post data to the running node.\\n\\n> For quick, temporary tests this guide uses `/tmp/pantheon/dev/`, `/tmp/pantheon/mainnet/`, `/tmp/pantheon/rinkeby/` as mount volumes, which are automatically cleaned at every boot. You can create other folders instead, but whichever option you choose, make sure you create the folders first.\\n\\n```shell\\n$ mkdir -p /tmp/pantheon/dev/\\n$ mkdir -p /tmp/pantheon/mainnet/\\n$ mkdir -p /tmp/pantheon/rinkeby/\\n```\\n\\nHere are some examples:\\n\\nMainnet Node:\\n\\n```shell\\ndocker run pegasyseng/pantheon:latest\\n```\\n\\nLocal test Node with Websockets and HTTP RPC services enabled:\\n\\n```shell\\ndocker run -p 8545:8545 -p 8546:8546 --mount type=bind,source=/tmp/pantheon/dev,target=/var/lib/pantheon pegasyseng/pantheon:latest --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins=\\"all\\" --rpc-ws-enabled --network=dev\\n```\\n\\nRinkeby Node:\\n\\n```shell\\ndocker run -p 30303:30303 --mount type=bind,source=/tmp/pantheon/rinkeby,target=/var/lib/pantheon pegasyseng/pantheon:latest --network=rinkeby\\n```\\n\\nWhile the node is running, you can use another terminal window to interact with the node.\\n\\n![](https://i.imgur.com/kw1VHDs.png)\\n\\nFor example, using `curl` to call the `eth_chainId` RPC method:\\n\\n```shell\\ncurl -X POST --data \'{\\"jsonrpc\\":\\"2.0\\",\\"method\\":\\"eth_chainId\\",\\"params\\":[],\\"id\\":1}\' localhost:8545\\n```\\n\\n* * *\\n\\n## Getting started with Linux\\n\\nTwo installation methods are available:\\n\\n-   [Installing the binary distribution](http://docs.pantheon.pegasys.tech/en/stable/Installation/Install-Binaries/)\\n    For binary installation, [follow along to this section](#binary-install) and skip the next.\\n-   [Building from source](http://docs.pantheon.pegasys.tech/en/stable/Installation/Build-From-Source/)\\n    For building from source, [skip to this section](#build-from-source).\\n\\n> **Requirements**: For both of these methods, Pantheon needs the Java JDK installed on your machine. Current versions of Pantheon require Java JDK 11+ installed.\\n\\n### Binary install\\n\\nRemember to have at least 4GB of RAM if running a private network, and [review  the further requirements](http://docs.pantheon.pegasys.tech/en/stable/Installation/Overview/#disk-space-and-ram-requirements) for other installation types.\\n\\n1.  [Download the Pantheon binaries](https://bintray.com/consensys/pegasys-repo/pantheon/_latestVersion#files).\\n\\nYou can use `wget` to do this.\\n\\n```shell\\n$ sudo apt install wget\\n$ cd ~/bin/\\n$ wget   https://bintray.com/consensys/pegasys-repo/download_file?file_path=pantheon-1.1.4.tar.gz -O pantheon-1.1.4.tar.gz\\n$ wget https://bintray.com/consensys/pegasys-repo/download_file\\\\?file_path\\\\=pantheon-1.1.4.tar.gz -O pantheon-1.1.4.tar.gz\\n```\\n\\n> `$HOME/bin/` and `$HOME/.local/{bin,opt,usr}` are the recommended install folders for local user binaries on machines used by a single user. Other options are available such as `/opt/local/` or `/usr/local/bin/` depending on your local setup and preference. [Read this Stack Exchange thread for more details](https://unix.stackexchange.com/questions/36871/where-should-a-local-executable-be-placed).\\n\\n2.  Unpack the compressed file:\\n\\n```shell\\n$ tar -xzf pantheon-1.1.4.tar.gz\\n$ cd pantheon-1.1.4\\n```\\n\\n> Replace 1.1.4 with whichever release you downloaded.\\n\\n3.  Confirm the download isn\'t corrupted and check the version .The output should return the Pantheon and JDK version.\\n\\n```shell\\n$ bin/pantheon --version\\npantheon/v1.1.4/linux-x86_64/oracle_openjdk-java-11\\n```\\n\\n### Build from Source\\n\\nTwo options are available: [installing and running locally](http://docs.pantheon.pegasys.tech/en/stable/Installation/Build-From-Source/#installation-on-linux-unix-mac-os-x) or [on a VM](http://docs.pantheon.pegasys.tech/en/stable/Installation/Build-From-Source/#installation-on-vm).\\n\\nThis guide focuses on the local solution.\\n\\n1.  Clone the Pantheon codebase\\n\\n```shell\\n$ cd ~/bin/\\n$ git clone --recursive https://github.com/PegaSysEng/pantheon.git\\n```\\n\\n2.  Build Pantheon\\n\\n```shell\\n$ cd pantheon/\\n$ ./gradlew build -x test\\n```\\n\\n3.  Choose distribution version and check version.\\n\\n```shell\\n$ cd build/distributions/\\n$ tar -xzf pantheon-1.1.4.tar.gz\\n$ cd pantheon-1.1.4/\\n$ bin/pantheon --version\\n$ bin/pantheon --help\\n```\\n\\n## Config\\n\\nNo additional configuration is necessary for Pantheon to run correctly.\\nEach different network type (including mainnet) set by the `--network` command line flags automatically loads the appropriate default configuration.\\n\\nIf you need to change the settings, these options are either configured at Node or Network-level.\\nNetwork-level settings are defined in the genesis file and are loaded by every Node connected to that specific network. Whereas Node-level settings are modified either in the node configuration file, or through command line flags.\\n\\nFor more information on configuration, [read the corresponding documentation](http://docs.pantheon.pegasys.tech/en/stable/Configuring-Pantheon/Network-vs-Node/).\\n\\n## Starting Pantheon\\n\\nAfter you have completed the above steps, you can continue using this distribution with the [regular Starting Pantheon guide](http://docs.pantheon.pegasys.tech/en/stable/Getting-Started/Starting-Pantheon/).\\n\\nFor a quick preview, this could be an HTTP request on a `dev` network Node running with docker.\\n\\n```shell\\n$ docker run -p 8545:8545 --mount type=bind,source=/tmp/pantheon/dev,target=/var/lib/pantheon pegasyseng/pantheon:latest --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins=\\"all\\" --rpc-http-enabled --network=dev\\n```\\n\\nThis is how you build a request calling the `eth_chainId` method.\\n\\n```java\\nString payload=\'{\\"jsonrpc\\":\\"2.0\\",\\"method\\":\\"eth_chainId\\",\\"params\\":[],\\"id\\":1}\';\\nString requestUrl=\\"http://localhost:8545\\";\\nsendRequest(requestUrl, payload);\\n```\\n\\nAnd the method implementation:\\n\\n```java\\npublic static String sendRequest(String requestUrl, String payload) {\\n    try {\\n        URL url = new URL(requestUrl);\\n        HttpURLConnection connection = (HttpURLConnection) url.openConnection();\\n\\n        connection.setDoInput(true);\\n        connection.setDoOutput(true);\\n        connection.setRequestMethod(\\"GET\\");\\n        connection.setRequestProperty(\\"Accept\\", \\"application/json\\");\\n        connection.setRequestProperty(\\"Content-Type\\", \\"application/json; charset=UTF-8\\");\\n        OutputStreamWriter outputWriter = new OutputStreamWriter(connection.getOutputStream(), \\"UTF-8\\");\\n\\n        outputWriter.write(payload);\\n        outputWriter.close();\\n\\n        BufferedReader buffer = new BufferedReader(new InputStreamReader(connection.getInputStream()));\\n        StringBuffer jsonString = new StringBuffer();\\n        String line;\\n        while ((line = buffer.readLine()) != null) {\\n                jsonString.append(line);\\n        }\\n        buffer.close();\\n\\n        connection.disconnect();\\n        return jsonString.toString();\\n    } catch (Exception e) {\\n            throw new RuntimeException(e.getMessage());\\n    }\\n}\\n```\\n\\nThat request should return the following result:\\n\\n```json\\n{\\n  \\"jsonrpc\\" : \\"2.0\\",\\n  \\"id\\" : 1,\\n  \\"result\\" : {\\n    \\"startingBlock\\" : \\"0x0\\",\\n    \\"currentBlock\\" : \\"0x2d0\\",\\n    \\"highestBlock\\" : \\"0x66c0\\"\\n  }\\n}\\n```\\n\\nFine more information in the [Pantheon documentation](http://docs.pantheon.pegasys.tech/en/stable/)."}',
                    authorId: '824e8fa64ff92b859cc9991ac044e00b665b9b04',
                    dateCreated: '2019-07-19T12:57:15.901Z',
                    datePublished: '2019-07-19T12:57:18.891Z',
                    status: 'PUBLISHED',
                    attributes: {
                        background:
                            'https://api.kauri.io:443/ipfs/QmUzvLvjLLisUjUunfW81gqCuZ32Uhn5mdiidJ7ArKkkb4',
                    },
                    contentHash:
                        'QmdG4nTrWQomqGSxRa3JNA7hQN1W7Jy1yPaKkgnaNFJR3n',
                    checkpoint: null,
                    tags: [
                        'ethereum',
                        'pegasys',
                        'java',
                        'installation',
                        'client',
                        'pantheon',
                    ],
                    voteResult: {
                        sum: 0.0,
                        count: 0,
                        hasVoted: null,
                        quantity: {},
                        __typename: 'VoteResultDTO',
                    },
                    author: {
                        id: '824e8fa64ff92b859cc9991ac044e00b665b9b04',
                        name: 'Felipe Faraggi',
                        username: 'felipefaraggi',
                        avatar:
                            'https://api.kauri.io:443/ipfs/QmUR61QiSMk1XqBaAyvA7WmgVBP44x7RQMBa8RU3DCMp6f',
                        __typename: 'PublicUserDTO',
                    },
                    owner: {
                        id: '5d2f30daaba2920001c82409',
                        name: 'Java Ethereum',
                        avatar:
                            'https://api.kauri.io:443/ipfs/QmQ9to7bfbR6ADTG2tAKVxWTNw8o3YbwJ1LzdpEJeanLBX',
                        resourceIdentifier: {
                            id: '5d2f30daaba2920001c82409',
                            type: 'COMMUNITY',
                            __typename: 'ResourceIdentifier',
                        },
                        __typename: 'CommunityDTO',
                    },
                    contributors: [
                        {
                            id: '824e8fa64ff92b859cc9991ac044e00b665b9b04',
                            name: 'Felipe Faraggi',
                            username: 'felipefaraggi',
                            avatar:
                                'https://api.kauri.io:443/ipfs/QmUR61QiSMk1XqBaAyvA7WmgVBP44x7RQMBa8RU3DCMp6f',
                            __typename: 'PublicUserDTO',
                        },
                    ],
                    comments: {
                        content: [],
                        totalPages: 0,
                        totalElements: 0,
                        __typename: 'ResponsePage_CommentDTO',
                    },
                    updateComment: null,
                    __typename: 'ArticleDTO',
                },
            ],
            pending: [],
            __typename: 'CommunityDTO',
        },
        searchArticles: {
            totalElements: 0,
            isLast: true,
            content: [],
            __typename: 'ResponsePage_ArticleDTO',
        },
    },
    dataPresent: true,
}

export const Collection = {
    data: {
        getCollection: {
            id: '5cb55c871325f2000141df73',
            name: 'Getting Started',
            description:
                'Learn about blockchains, smart contracts, Ethereum, and what you can build with them',
            tags: ['ethereum', 'web3', 'solidity'],
            background:
                'https://api.kauri.io:443/ipfs/QmQTsd7FhCLBQVJCYNP8a5Vf1G68AsxLPyDtWP3gToc7g4',
            dateCreated: '2019-04-16T04:39:35.351Z',
            dateUpdated: '2019-04-16T04:39:35.351Z',
            owner: {
                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                name: 'Kauri Team',
                username: 'kauri',
                avatar:
                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                resourceIdentifier: {
                    id: '37648fc15a8365735289e002d65d44d80c505e8b',
                    type: 'USER',
                    __typename: 'ResourceIdentifier',
                },
                __typename: 'PublicUserDTO',
            },
            sections: [
                {
                    name: 'Start Here',
                    description:
                        "Don't know where to begin, these articles take you from no knowledge to zero knowledge",
                    resources: [
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'd55684513211466da7f8cc03987607d5',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 2,
                            },
                            description:
                                'What is blockchain anyway? In this article, I will try to provide an in-depth yet simple to understand explanation. I will tell you about what is a blockchain, what features it has, which groups of users exist in blockchain network, and how they interact with each other. Note: this article mostly covers public blockchains, and of that public blockchains, it’s mostly about their use for cryptocurrencies. There are other uses of public blockchains, and there are also private blockchains. Private (',
                            id: 'd55684513211466da7f8cc03987607d5',
                            version: 2,
                            title: 'Blockchain Explained',
                            content:
                                '{"markdown":"\\n----\\n\\n\\n![](https://api.beta.kauri.io:443/ipfs/QmWRdtskZTBhm39uQjaphrQcc4sXdTeUVuZ2s3ZWfdZ42m)\\n\\nWhat is blockchain anyway? In this article, I will try to provide an in-depth yet simple to understand explanation. I will tell you about what is a blockchain, what features it has, which groups of users exist in blockchain network, and how they interact with each other.\\n \\n_Note: this article mostly covers public blockchains, and of that public blockchains, it’s mostly about their use for cryptocurrencies. There are other uses of public blockchains, and there are also private blockchains. Private (or permissioned) blockchains have a similar structure, but different functions and mechanics._\\n \\n\\n## Overview\\nThe blockchain is just a bunch of blocks. Each block contains pieces of information. In cryptocurrencies, the information is usually a set of transactions. Each block is connected to the previous one.\\nTo date, the main usage of blockchain is cryptocurrencies. Cryptocurrency is an electronic cash system that runs without a central authority. Cryptocurrencies got adoption because they solved a problem of double-spending — a situation when a dishonest user of a decentralized cash system spends same coins twice. In Bitcoin, Ethereum, and other cryptocurrencies spending the same coins twice is almost impossible.\\nThe blockchain is a method of organizing and storing data. There are other methods, of course, though blockchain has several unique features.\\n\\n## Features\\nWhy use blockchain? Why not use traditional storage methods, like SQL database or key-value storage? Blockchain provides 2 features that make it a great use for cryptocurrencies: it’s distributed and trustless.\\nEven if a company uses data replication, it is usually 2–5 copies. In blockchain, the number of copies can be hundreds or thousands. In that way, the blockchain is \\n**distributed**\\n . The number of copies of Bitcoin ledger is equal to the number of full nodes. To wipe the information about transactions from existence, you need to delete it from each full node around the globe. To stop the blockchain, you can’t just hack the single computer or even a whole country. You need to break computers from different locations, running different operating systems and taking different security measures. Stopping the blockchain by hacking each full node is practically impossible.\\nIn PayPal, you believe that all transactions will complete and you’ll able to withdraw the money from your balance at any moment. In blockchain, you don’t need to trust any corporation. You don’t need to trust any particular user either. Instead, you believe that most of the users will behave honestly. In that sense, the blockchain is a \\n**trustless**\\n system. One of the features of trustless systems is fair rules for everyone. For example, PayPal is a monopoly in digital money, so it can increase the commission, lock your funds, and delay withdrawals. Basically, it can do everything with your money. In blockchain, no one has the power to make their own rules. Instead, it is driven by the majority and the free market.\\n\\n## Drawbacks\\nThe blockchain is not a silver bullet, and it has its own drawbacks. Most of them are partially fixable and negligible, though some of them might become a problem.\\nNote that this is just an overview of possible problems; the list is not exhaustive.\\n\\n## Sybil Attack\\nThe first problem is a possibility of Sybil Attack. It is a situation where a single person controls few nodes and persuades another user that all these nodes belong to different users. Basically, when succeeded, this attack allows a user to block another user from the network completely. This can result in transaction censoring when the attacker can decide which transactions to show you and which not. An attacker can also block your transactions from the network by not broadcasting them to other users. It can lead to double-spending and can block you from the rest of the network. To protect from Sybil Attack, nodes can limit the outbound connections to one per subnet. Another way to mitigate attack is to look for nodes with suspiciously-low hashrate.\\n\\n## Denial-of-Service Attack\\nAnother possible problem is a Denial-of-Service (DoS) attack. An attacker can overload a node by sending a lot of data to it. For example, it can send a really big block or transactions with scripts that take too long to execute. Bitcoin and other cryptocurrencies have some protection from DoS attacks. For example, many cryptocurrencies have a maximum possible block size.\\n\\n## Scalability\\nPublic blockchain systems are hard to scale. Hard means neither easy nor impossible. It is not impossible, because there aren’t any technological barriers to increase the throughput of the network. It is not easy, because just increasing it would make the system more centralized. Increasing the capacity of the blockchain means increasing hardware requirements of running a full node, and that means fewer people want and be able to maintain nodes.\\nIt is a question of whether a blockchain should be hugely scalable in the first place. First, blockchain is not a silver bullet — no need to use it for everything, even if it’s related to money and finance. Second, blockchain can be scaled by off-chain solutions. For example, Bitcoin throughput can be increased via Lightning Network.\\n\\n## Block content\\nEach block is made of two parts: header and data.\\nBlock header is a metadata. Usually, it contains such information as block number, timestamp (the record of when the block was created), block hash, and nonce.\\n\\n![](https://api.beta.kauri.io:443/ipfs/QmcM7hwg6HU9kzB3LgCXzdSAMqZQKegksTfBqSkHRAgz9Y)\\n\\nBlock data is a payload. It is the useful information that we need to store. The data usually contains multiple pieces of information that share the same structure. In Bitcoin, each block contains about a hundred of such pieces. Each piece is a transaction. To simplify, each transaction is sender address, recipient address, amount of transaction, and fee. In Ethereum, each transaction also contains “input data” field, which is used to pass data to smart contracts.\\n\\n![](https://api.beta.kauri.io:443/ipfs/QmPLLGmY7T75rjGGHvbSEr71ZBE2xUqdDCGy3tnmdeLXtZ)\\n\\n\\n## Genesis block\\nGenesis block is the block number zero, the first block that is ever created in the blockchain. Genesis block is the same block as others, except it doesn’t have a link to the previous block.\\nGenesis block in Bitcoin: \\n[Bitcoin Block #0](https://blockchain.info/block/000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f)\\n .\\n\\n![](https://api.beta.kauri.io:443/ipfs/QmVfrPPnqYxzJahKTtmrfrDBoHWgpFTWfdEkwYHP6EtLxp)\\n\\n\\n## Block generation\\nThe only way to add new information to the blockchain is to add a block to the end of it.\\nThe amount of added information is usually limited by software, otherwise, it may become bloated, and impossible for most of the users to keep the whole history of the blockchain. The general idea is to add new blocks in equal periods of time. Qualified users create blocks and send them to other network participants. If the block is valid, other users accept it. If it’s invalid, they ignore it and may punish block creator. The valid block propagates through the network in a few seconds.\\n\\n## Proof-of-Work\\nIn proof-of-work (PoW) systems, adding new block is usually called “ \\n**mining**\\n ”. Each miner independently tries to find a valid hash with the desired difficulty. This difficulty is automatically defined by software to control the number of new blocks. The first miner who finds the correct hash becomes the creator of a new block.\\nAs more and more miners join the network, the total hash rate — the combined computing power of all miners — increases. If there would be no constraints, miners would find hashes, and therefore blocks, more and more often. But most of the coins seek constant rate of finding new blocks, so they change a difficulty of mining based on the hash rate.\\nThe difficulty tells users how many hashes miners should find to get a correct one. The higher the difficulty, the more hashes is required. The difficulty increases when the hash rate increases. In that way, mining difficulty counterbalances ever-increasing computing power of miners. The difficulty of the network is rebalanced based on how often new blocks are mined in past. In can readjust after each block or after several blocks. In Bitcoin, for example, the difficulty readjusts every 2016 blocks, which takes about 2 weeks.\\n\\n## Proof-of-Stake\\nIn proof-of-stake (PoS), block producers are selected based on how many coins they have. This selection can be made randomly or by choosing those who get the most votes. The more coins you have, the higher the probability that you’ll be selected as the next producer or the bigger voting power you have. Selected producers then make blocks in specified time.\\nTo stop nodes from voting on wrong blocks, a punishment can be introduced. One way is to punish those nodes who vote on multiple blocks in the same round. Another way is to punish those nodes who voted for the unpopular choice, assuming that block that got few votes is incorrect.\\nThe process of staking can be delegated to other nodes. For example, if a user has a large number of coins, but he doesn’t want to or can’t vote regularly, he can delegate staking to another user. That user will have the voting power combined with the coins of the other user. After earning a profit, the delegate can then share part of his earnings. The whole process of delegation and sharing profits can be done automatically.\\n\\n## Hashing\\nThe hash is like a footprint of a digital file. Different files produce different hashes, and equal files produce equal hashes. You can easily find a hash of each file, but it’s very hard to find the original file by its hash. Moreover, slightly different files produce very different hashes, so you can’t tell how different are two files based on their hashes.\\nIn blockchain, each block contains the hash of the previous block. That way, if some block will be changed even slightly, its hash will also change, and the hash of all subsequent blocks will change too.\\nThe hash of each transaction is based on the previous hash and the block data. It can also contain a timestamp. If blocks are created by mining, network difficulty and nonce are also included in the hash.\\n\\n## Immutability\\nImmutability means that something can’t be changed. When people say that blockchain is immutable, they mean that changing old blocks is impractical. If you change a transaction, the hash of this transaction will also change, which in turn will change the hash of the Merkle root, and that will change block’s hash. As each block keeps the hash of the previous block, all blocks that come after changed block will also become invalid.\\nImagine an attacker wants to change a transaction that was made 1 hour ago. The attacker will need to mine all blocks from the one that was changed to the latest one. Moreover, he will also need to mine all future blocks that will be created while he mines previous blocks.\\nIt is indeed possible to change even the earliest blocks, but it would require controlling more than a half of total mining power, hence the meaning of 51% attack. In general, the older the block, the less probable that an attacker will successfully change it. Merchants often wait for 6 blocks to ensure that they will get the money, hence the 6 confirmations rule.\\n\\n## Nodes\\nNodes are computers that read and write to the blockchain. Different types of nodes have different roles and abilities.\\n\\n## Mining node\\nMining nodes are nodes that produce blocks. They usually have huge computing resources. Miners usually don’t validate the blocks, as they don’t store the blockchain. To make new blocks, all they need is a set of recent transactions and a hash of the last block.\\n\\n## Full node\\nFull nodes are the nodes that store the entire copy of the blockchain. They validate the blocks that they receive, and propagate validated blocks to the network. They can also send their own transactions to the pool.\\n\\n## Light node\\nLight nodes don’t store the whole blockchain. They usually store block headers and a very small set of transactions. Light nodes can’t validate blocks and need to trust full nodes. Light nodes, however, can connect to other nodes, receive new blocks, and send the transactions.\\n\\n## Web “node”\\nWeb nodes are not nodes at all. They are wallets that connect to the centralized servers. They don’t store any parts of the blockchain. Web wallets can’t connect to other nodes, receive blocks, or send the transactions. They can only ask a server to do that and expect that the server will provide correct information. They trust entirely to the server that they are connected to. Mobile wallets that don’t store blockchain data also belong there.\\n\\n![](https://api.beta.kauri.io:443/ipfs/QmNMqRhHk3JyXgHvNtgrFwK8PAhL2yd2YQWhbfXEFmnTwW)\\n\\n\\n## Network\\nIn decentralized systems, nodes come and go. There isn’t any guarantee that some particular node will be online today or tomorrow. That fact heavily affects the methods of connecting to and interacting with nodes.\\n\\n## Peer discovery\\nPeer discovery is a process of getting to know other network participants. When a user launches a node for the first time, it doesn’t have a track of peers to connect. To interact with the network, it should find peers and keep them in memory.\\nThere are several methods of discovering other peers, including hardcoded addresses, user input, DNS lookup, and others.\\nThe most primitive way is to connect to the addresses that are hardcoded in the wallet program. These addresses represent nodes that were initially set up by developers to grow the network in the first few days or weeks. While this is a simple method, it is usually not very spread in mature networks. For example, \\n**hardcoded addresses**\\n in Bitcoin is used only as a last resort, when other methods don’t work.\\nUsers can also \\n**manually**\\n provide the list of nodes they got elsewhere. A user can either write them into a text file, provide as command-line arguments, or enter them via the graphic user interface.\\nAnother method to discover peers is a \\n**DNS lookup**\\n . There are DNS servers that keep lists of nodes. These lists are updated by maintainers of these servers. Usually, there are several DNS servers so if one of the servers go down others will still be serving.\\nOnce a node found at least one peer, he can connect it. If the connection is successful, they can \\n**exchange**\\n information about peers that they collected.\\nWhen discovered, node addresses are stored in a database to get them on the next computer launch. Nodes with newer client software version are preferred. Addresses of old, inactive nodes are removed.\\n\\n## Blockchain download\\nOnce a node is connected to other peers, it can start to download a blockchain block by block.\\nThe first way to do that is to simply let the node to download the blocks from other peers. It can be slow because it depends not only on your Internet connection speed but also on how broad the bandwidth of the peers is. But it is a decentralized method, meaning that it doesn’t depend on a single site or server.\\nAnother way to download blockchain data is to download it from some external source on the Internet. It can be some random website, torrent file, or an archive sent to you by your friend. That might be faster than downloading it via p2p-connection, but it is also centralized and requires to trust the source that you download it from. Not only that, many links that once led to the blockchain archive might be dead by now.\\nWhatever method the blockchain is downloaded, it should be validated, and that might take even longer time. The computer should validate each block from the genesis one. The validation process includes checking proof-of-work, ensuring that all transactions in a block are correct, checking that Merkle Tree root calculated correctly, etc. While the speed of downloading depends on bandwidth, the validation relies on the CPU power.\\nSometimes, it is possible to skip the process of the validation of the whole blockchain and just check those blocks that contain wallet transaction, i. e. transactions sent to or from the selected wallet. The availability of such light validation depends on the wallet software that you use.\\n\\n## Sending a transaction\\nWhen it comes to spreading new transactions and blocks, cryptocurrencies usually use something called \\n**Gossip protocol**\\n . It’s like many people spreading the gossip until everyone knows it.\\nIt starts with a node making a transaction to send money. After the transaction is signed, the node sends it to the neighbor nodes.\\nWhen these nodes receive the transaction, they will check it. If the transaction is properly structured (has the correct format, has a signature, etc) and is not a double spend, they will, in turn, send it to their peers.\\nOf course, a node might already have the transaction when its peer is trying to send it. Because of that, the nodes first send the hash of the transaction. If the receiving node has the transaction with that hash, it will not download it again. If the receiving node doesn’t have the transaction, it will download it and send it further.\\nEventually, all connected nodes, including miners, will receive the transaction.\\n\\n![](https://api.beta.kauri.io:443/ipfs/QmR2vq4RYzdkDsgcdwFUob8XyT4DcFeHLSqpuMQoccMcXM)\\n\\n\\n## Block propagation\\nMiners and mining pools that actively make blocks collect all incoming transactions. It is economically viable for them to include as many transactions as possible in the next block because they will receive all transaction fees.\\nAfter a miner or a mining pool found correct hash, he will send the block to his peers. After that, the process is the same as sending a transaction. Nodes that received the new block send it to their peers, and after some time, everyone has the block.\\nIn case of PoS systems, the process is almost the same. When it is time for a block producer to make a block, he collects all transactions, puts them into his block, and sends the block to the peers.\\n\\n## Achieving consensus\\nTo work properly, a decentralized system like a cryptocurrency should constantly try to achieve a consensus. This basically means that each node should have the same set of blocks and transactions, which are stored in the same order.\\nMost of the time, the consensus will be achieved without any problems. The correct transactions and blocks will spread, and incorrect ones will die off.\\nHowever, it is possible that at some stage, two blocks will point to the same parent block. In other words, the chain will be forked in two chains. \\n**Forks**\\n can happen both in PoW and PoS systems. In proof-of-work chains, two miners can find a hash at the same time, and both will refer to the same block, the one that was mined before. In proof-of-stake, a block producer can pick an older, not the last block as its parent.\\nTo resolve a fork, the whole network should agree on which fork will become the main one and which will die. The rule of thumb is “the longest chain wins”. In PoS chain, that simply means that eventually, one fork will be longer than other, by at least one block, and all honest nodes and block producers will work on that fork, and drop the other one. In PoW chain, the “longest” usually means “more proof-of-work done”, so the fork that wins is not the one that has the biggest block number, but the one that more miners work on.\\n\\n## Dealing with attacks\\nBut how to achieve consensus when there are fraudulent nodes try to overwrite the history or censor the network? There are three possible scenarios.\\nFirst, an attacker doesn’t have a majority. The majority is either in mining rig (PoW) or coins (PoS). In that case, his possibilities are quite limited. He can try to conduct a 51% attack but has a high chance of failure. He is also risking wasting money on electricity, mining computers, or getting a stake by buying coins.\\nSecond, an attacker controls a majority. In that situation, he can pretty much control the network. However, even if some authority will control the network, it will likely to lose money. The beauty of cryptocurrencies is that they were built with game theory principles in mind. In cryptocurrencies, having power always means having something at stake. It can be GPUs, ASICs, staked coins, or something else. The attack will likely harm many network participants, and it will affect the price. Mining rigs and staked coins owned by the attacker will lose in value if will be valuable at all.\\nIt may be dangerous for someone to control the majority of power without even trying to make an attack. If the fact will become known, it will spread quickly and likely affect the price.\\nThird, a majority of nodes behaves badly. In fact, the majority doesn’t even need to be coordinated by some person. Simply by behaving wrong, they would be unlikely to make a double spend, but they can stop the network. This is the very unlikely event, as the majority usually obey laws, though it is possible in theory. As in the second scenario, the misbehaving majority will likely be punished by market forces.\\n"}',
                            authorId:
                                '7d8e6cfb1b8709139631cac4cc458f63611ffdf8',
                            dateCreated: '2018-11-29T20:25:40.320Z',
                            datePublished: '2018-11-29T20:25:43.566Z',
                            status: 'PUBLISHED',
                            attributes: {},
                            contentHash:
                                'QmWBJJJt641GFFPif6umEnYPSWgQR2qn24PnMNb2E4AjYt',
                            checkpoint:
                                'QmeeHjh7Me7siWSuoQFBXYbE7kWQZxaWcRBHcr9oagftw4',
                            tags: null,
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '7d8e6cfb1b8709139631cac4cc458f63611ffdf8',
                                name: 'Timur Badretdinov',
                                username: 'Destiner',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmNWpNq9fiaD2CDnrDh2i5dvG5DBfRswAD6RN3zpzw3tiT',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '7d8e6cfb1b8709139631cac4cc458f63611ffdf8',
                                name: 'Timur Badretdinov',
                                username: 'Destiner',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmNWpNq9fiaD2CDnrDh2i5dvG5DBfRswAD6RN3zpzw3tiT',
                                resourceIdentifier: {
                                    id:
                                        '7d8e6cfb1b8709139631cac4cc458f63611ffdf8',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '7d8e6cfb1b8709139631cac4cc458f63611ffdf8',
                                    name: 'Timur Badretdinov',
                                    username: 'Destiner',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmNWpNq9fiaD2CDnrDh2i5dvG5DBfRswAD6RN3zpzw3tiT',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            id: '5bb65f0f4f34080001731dc2',
                            name: 'Ethereum 101',
                            description:
                                'High level overview of all things Ethereum',
                            tags: ['SOLIDITY', 'Ethereum'],
                            background: null,
                            dateUpdated: '2019-02-13T10:26:29.806Z',
                            owner: {
                                id: '60e0fca78e5bf845d7af875288b1bfb010d61ac4',
                                name: 'Wil Barnes',
                                username: 'wil',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmQQCj8493FQLUmWGCQMWzny6euAQUwhSBToFZjPtAExbH',
                                resourceIdentifier: {
                                    id:
                                        '60e0fca78e5bf845d7af875288b1bfb010d61ac4',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            sections: [
                                {
                                    id: 'df467976-7f8f-42f8-8d82-0f29afe365cb',
                                    name: 'Ethereum 101',
                                    description: 'Ethereum 101',
                                    resourcesId: [
                                        {
                                            id:
                                                '67a81d8746ee4b49ba19447e8e2a983e',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '48d5098292fd4f11b251d1b1814f0bba',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '1c2c9e3a3db0461584757a60ca2424a9',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '3eba08b801a44776a07607b9e046dd08',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                'b282e90cb260459fb8a8cc6e24ae34fa',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '1f4196c3db7f41e5845f063dc1581a4e',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                'e4f66c6079e74a4a9b532148d3158188',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '7e79b6932f8a41a4bcbbd194fd2fcc3a',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                'a7ac47d26eab4ce899a865619122d42e',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                    ],
                                    resources: [
                                        {
                                            id:
                                                '67a81d8746ee4b49ba19447e8e2a983e',
                                            version: 7,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '48d5098292fd4f11b251d1b1814f0bba',
                                            version: 4,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '1c2c9e3a3db0461584757a60ca2424a9',
                                            version: 6,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '3eba08b801a44776a07607b9e046dd08',
                                            version: 6,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                'b282e90cb260459fb8a8cc6e24ae34fa',
                                            version: 3,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '1f4196c3db7f41e5845f063dc1581a4e',
                                            version: 4,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                'e4f66c6079e74a4a9b532148d3158188',
                                            version: 2,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '7e79b6932f8a41a4bcbbd194fd2fcc3a',
                                            version: 2,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                'a7ac47d26eab4ce899a865619122d42e',
                                            version: 1,
                                            __typename: 'ArticleDTO',
                                        },
                                    ],
                                    __typename: 'SectionDTO',
                                },
                            ],
                            resourceIdentifier: {
                                type: 'COLLECTION',
                                id: '5bb65f0f4f34080001731dc2',
                                __typename: 'ResourceIdentifier',
                            },
                            __typename: 'CollectionDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: '6479f4a2cb3446d790dd27e8aeb36f63',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 1,
                            },
                            description:
                                'Smart contracts are programs which govern the behaviour of accounts within the Ethereum state, and Solidity is an object-oriented, high-level language for implementing smart contracts. With Solidity you can create contracts for uses such as voting, crowdfunding, blind auctions, and multi-signature wallets. Solidity was influenced by C++, Python and JavaScript and is designed to target the Ethereum Virtual Machine (EVM). Solidity is statically typed, supports inheritance, libraries and complex us',
                            id: '6479f4a2cb3446d790dd27e8aeb36f63',
                            version: 1,
                            title:
                                'An Introduction to Smart Contracts with Solidity',
                            content:
                                '{"markdown":"Smart contracts are programs which govern the behaviour of accounts within the Ethereum state, and Solidity is an object-oriented, high-level language for implementing smart contracts.\\n\\nWith Solidity you can create contracts for uses such as voting, crowdfunding, blind auctions, and multi-signature wallets.\\n\\nSolidity was influenced by C++, Python and JavaScript and is designed to target the Ethereum Virtual Machine (EVM).\\n\\nSolidity is statically typed, supports inheritance, libraries and complex user-defined types among other features.\\n\\n## An Introductory Smart Contract\\n\\nThe Solidity code below sets the value of a variable and exposes it for other contracts to access.\\n\\n### Storage Example\\n\\n```solidity\\npragma solidity >=0.4.0 <0.7.0;\\n\\ncontract SimpleStorage {\\n    uint storedData;\\n\\n    function set(uint x) public {\\n        storedData = x;\\n    }\\n\\n    function get() public view returns (uint) {\\n        return storedData;\\n    }\\n}\\n```\\n\\nThe first line defines that the source code is written for Solidity version 0.4.0 or anything newer that does not break functionality (up to, but not including, version 0.7.0). This is to ensure that the contract is not compilable with a new (breaking) compiler version, where it could behave differently. Pragmas are common instructions for compilers about how to treat the source code (e.g., [pragma once](https://en.wikipedia.org/wiki/Pragma_once)).\\n\\nA contract in the sense of Solidity is a collection of code (its **functions**) and data (its **state**) that resides at a specific address on the Ethereum blockchain. The line `uint storedData;` declares a state variable called `storedData` of type `uint` (unsigned integer of 256 bits). Think of it as a single slot in a database that can be queried and altered by calling functions of the code that manages the database. In the case of Ethereum, this is always the owning contract. And in this case, the functions set and get can be used to modify or retrieve the value of the variable.\\n\\nTo access a state variable, you do not need the prefix `this` as is common in other languages.\\n\\nThis contract does not do much apart from (due to the infrastructure built by Ethereum) allow anyone to store a single number that is accessible by anyone in the world without a (feasible) way to prevent you from publishing this number. Anyone could call `set` again with a different value and overwrite your number, but the number is still stored in the history of the blockchain. There are ways to impose access restrictions so that only you can alter the number.\\n\\n## Next Steps\\n\\nThis introduction and example was taken from [the official Solidity documentation](https://solidity.readthedocs.io/), which is your best resource. Recommended next steps are:\\n\\n-   [The more advanced subcurrency example](https://solidity.readthedocs.io/en/latest/introduction-to-smart-contracts.html#subcurrency-example)\\n-   [A selection of smart contract examples](https://solidity.readthedocs.io/en/latest/solidity-by-example.html)\\n-   [An in-depth guide to the language core concepts](https://solidity.readthedocs.io/en/latest/solidity-in-depth.html)\\n"}',
                            authorId:
                                '37648fc15a8365735289e002d65d44d80c505e8b',
                            dateCreated: '2019-04-30T00:10:26.716Z',
                            datePublished: '2019-04-30T00:10:30.059Z',
                            status: 'PUBLISHED',
                            attributes: {
                                background:
                                    'https://api.kauri.io:443/ipfs/QmeN9SKhoubbXwfpSdprqKF8bmNVmW6JaBB99MdwuGtuLj',
                            },
                            contentHash:
                                'QmSXAzZk2YzuDvTGy8mQHy3pFjEP3QKKQYB7GXTakFshNd',
                            checkpoint:
                                'QmUatCmc2dGQXj7JyC6Pi3VhQLZ9mcBh5D22CimUXddbtw',
                            tags: ['ethereum', 'smart-contracts', 'solidity'],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                resourceIdentifier: {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    name: 'Kauri Team',
                                    username: 'kauri',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            id: '5b8e401ee727370001c942e3',
                            name: 'Full Stack dApp Tutorial Series',
                            description:
                                'Series of articles and tutorials aimed at experienced software engineers, introducing the web3 tech stack and available resources. Culminating in building your first dApp (decentralised application)',
                            tags: [
                                'dapp',
                                'embark',
                                'react',
                                'tutorial',
                                'truffle',
                                'solidity',
                                'remix',
                            ],
                            background:
                                'https://api.beta.kauri.io:443/ipfs/QmeBq9H9wPAYqZrxwc7gYFNz9V7uEiSpGZfyhJ3fhbt1Wn',
                            dateUpdated: '2019-03-11T15:31:46.571Z',
                            owner: {
                                id: '7b88584d0e6a608fa3a8716b0ca1620d61834a0c',
                                name: 'Josh Cassidy',
                                username: 'joshorig',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/Qmd3QHscrkTvdgqcdCWyrLxhDwMKurTZh99eAsEDdpWti8',
                                resourceIdentifier: {
                                    id:
                                        '7b88584d0e6a608fa3a8716b0ca1620d61834a0c',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            sections: [
                                {
                                    id: '95cf58e0-022f-499a-85e7-b9d986190e4f',
                                    name: 'Introduction',
                                    description: '',
                                    resourcesId: [
                                        {
                                            id:
                                                '3dad5bb77afc46d09666cc87b49c6729',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '9a7d8927c9484f879d761981d70a42df',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                    ],
                                    resources: [
                                        {
                                            id:
                                                '3dad5bb77afc46d09666cc87b49c6729',
                                            version: 2,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '9a7d8927c9484f879d761981d70a42df',
                                            version: 2,
                                            __typename: 'ArticleDTO',
                                        },
                                    ],
                                    __typename: 'SectionDTO',
                                },
                                {
                                    id: '802d161f-fd63-477e-8565-302629a44133',
                                    name:
                                        'Solidity - Your First Smart Contract',
                                    description: 'Solidity Basics',
                                    resourcesId: [
                                        {
                                            id:
                                                '7a27a1c1fbdc428b8058f14db1a227aa',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '124b7db1d0cf4f47b414f8b13c9d66e2',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '973c5f54c4434bb1b0160cff8c695369',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                    ],
                                    resources: [
                                        {
                                            id:
                                                '7a27a1c1fbdc428b8058f14db1a227aa',
                                            version: 1,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '124b7db1d0cf4f47b414f8b13c9d66e2',
                                            version: 9,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '973c5f54c4434bb1b0160cff8c695369',
                                            version: 6,
                                            __typename: 'ArticleDTO',
                                        },
                                    ],
                                    __typename: 'SectionDTO',
                                },
                                {
                                    id: 'cdad4265-6a1d-46ee-b5e7-79bd39bbbae2',
                                    name: 'Building With Truffle',
                                    description:
                                        'Compiling, Testing, & Adding A Frontend With The Truffle Framework',
                                    resourcesId: [
                                        {
                                            id:
                                                'cbc38bf09088426fbefcbe7d42ac679f',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                'f95f956261494090be1aaa8227464773',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '86903f66d39d4379a2e70bd583700ecf',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                    ],
                                    resources: [
                                        {
                                            id:
                                                'cbc38bf09088426fbefcbe7d42ac679f',
                                            version: 6,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                'f95f956261494090be1aaa8227464773',
                                            version: 8,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '86903f66d39d4379a2e70bd583700ecf',
                                            version: 14,
                                            __typename: 'ArticleDTO',
                                        },
                                    ],
                                    __typename: 'SectionDTO',
                                },
                                {
                                    id: 'cf4265f9-27e0-406c-87f8-30443c5a346a',
                                    name: 'Building With Embark',
                                    description:
                                        'Compiling & Testing With The Embark Framework',
                                    resourcesId: [
                                        {
                                            id:
                                                '13758d60f21648a1897fad1fa5b78237',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                'e8f18d0643c14756b43d698122bba9d9',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                    ],
                                    resources: [
                                        {
                                            id:
                                                '13758d60f21648a1897fad1fa5b78237',
                                            version: 1,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                'e8f18d0643c14756b43d698122bba9d9',
                                            version: 1,
                                            __typename: 'ArticleDTO',
                                        },
                                    ],
                                    __typename: 'SectionDTO',
                                },
                                {
                                    id: '610a1908-d64d-423b-9214-7d1adfd5dfaa',
                                    name: 'Building With Populus',
                                    description:
                                        'Compiling, & Testing With The Populus Framework',
                                    resourcesId: [
                                        {
                                            id:
                                                '21b6d5256bcd4a0bb23c84c75c1b1f76',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                        {
                                            id:
                                                '55a5ce344a31434ab7c749da26b58119',
                                            type: 'ARTICLE',
                                            __typename: 'ResourceIdentifier',
                                        },
                                    ],
                                    resources: [
                                        {
                                            id:
                                                '21b6d5256bcd4a0bb23c84c75c1b1f76',
                                            version: 1,
                                            __typename: 'ArticleDTO',
                                        },
                                        {
                                            id:
                                                '55a5ce344a31434ab7c749da26b58119',
                                            version: 1,
                                            __typename: 'ArticleDTO',
                                        },
                                    ],
                                    __typename: 'SectionDTO',
                                },
                            ],
                            resourceIdentifier: {
                                type: 'COLLECTION',
                                id: '5b8e401ee727370001c942e3',
                                __typename: 'ResourceIdentifier',
                            },
                            __typename: 'CollectionDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'af913a853eaf4db88627b3ff9572b770',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 1,
                            },
                            description:
                                'Vyper is a smart contract-oriented, pythonic programming language that targets the Ethereum Virtual Machine (EVM). It aims to follow the similar simplicity, security and readability principles of Python and provides the following features: Bounds and overflow checking: On array accesses as well as on arithmetic level. Support for signed integers and decimal fixed point numbers Decidability: It should be possible to compute a precise upper bound for the gas consumption of any function call. Stron',
                            id: 'af913a853eaf4db88627b3ff9572b770',
                            version: 1,
                            title:
                                'An Introduction to Smart Contracts with Vyper',
                            content:
                                '{"markdown":"Vyper is a smart contract-oriented, pythonic programming language that targets the Ethereum Virtual Machine (EVM).\\n\\nIt aims to follow the similar simplicity, security and readability principles of Python and provides the following features:\\n\\n-   **Bounds and overflow checking**: On array accesses as well as on arithmetic level.\\n-   **Support for signed integers and decimal fixed point numbers**\\n-   **Decidability**: It should be possible to compute a precise upper bound for the gas consumption of any function call.\\n-   **Strong typing**: Including support for units (e.g., timestamp, timedelta, seconds, wei, wei per second, meters per second squared).\\n-   **Small and understandable compiler code**\\n-   **Limited support for pure functions**: Anything marked constant is not allowed to change the state.\\n\\nAnd to follow similar principles, Vyper does not support:\\n\\n-   **Modifiers**\\n-   **Class inheritance**\\n-   **Inline assembly**\\n-   **Function overloading**\\n-   **Operator overloading**\\n-   **Recursive calling**\\n-   **Infinite-length loops**\\n-   **Binary fixed point**\\n\\n## Introductory Open Auction Example\\n\\nAs an introductory example of a smart contract written in Vyper, we begin with an open auction contract. All Vyper syntax is valid Python3 syntax, however not all Python3 functionality is available in Vyper.\\n\\nIn this contract, participants can submit bids during a limited time period. When the auction period ends, a predetermined beneficiary receives the amount of the highest bid.\\n\\n```python\\n# Open Auction\\n\\n# Auction params\\n# Beneficiary receives money from the highest bidder\\nbeneficiary: public(address)\\nauctionStart: public(timestamp)\\nauctionEnd: public(timestamp)\\n\\n# Current state of auction\\nhighestBidder: public(address)\\nhighestBid: public(wei_value)\\n\\n# Set to true at the end, disallows any change\\nended: public(bool)\\n\\n# Keep track of refunded bids so we can follow the withdraw pattern\\npendingReturns: public(map(address, wei_value))\\n\\n# Create a simple auction with `_bidding_time`\\n# seconds bidding time on behalf of the\\n# beneficiary address `_beneficiary`.\\n@public\\ndef __init__(_beneficiary: address, _bidding_time: timedelta):\\n    self.beneficiary = _beneficiary\\n    self.auctionStart = block.timestamp\\n    self.auctionEnd = self.auctionStart + _bidding_time\\n\\n# Bid on the auction with the value sent\\n# together with this transaction.\\n# The value will only be refunded if the\\n# auction is not won.\\n@public\\n@payable\\ndef bid():\\n    # Check if bidding period is over.\\n    assert block.timestamp < self.auctionEnd\\n    # Check if bid is high enough\\n    assert msg.value > self.highestBid\\n    # Track the refund for the previous high bidder\\n    self.pendingReturns[self.highestBidder] += self.highestBid\\n    # Track new high bid\\n    self.highestBidder = msg.sender\\n    self.highestBid = msg.value\\n\\n# Withdraw a previously refunded bid. The withdraw pattern is\\n# used here to avoid a security issue. If refunds were directly\\n# sent as part of bid(), a malicious bidding contract could block\\n# those refunds and thus block new higher bids from coming in.\\n@public\\ndef withdraw():\\n    pending_amount: wei_value = self.pendingReturns[msg.sender]\\n    self.pendingReturns[msg.sender] = 0\\n    send(msg.sender, pending_amount)\\n\\n# End the auction and send the highest bid\\n# to the beneficiary.\\n@public\\ndef endAuction():\\n    # It is a good guideline to structure functions that interact\\n    # with other contracts (i.e. they call functions or send Ether)\\n    # into three phases:\\n    # 1. checking conditions\\n    # 2. performing actions (potentially changing conditions)\\n    # 3. interacting with other contracts\\n    # If these phases are mixed up, the other contract could call\\n    # back into the current contract and modify the state or cause\\n    # effects (Ether payout) to be performed multiple times.\\n    # If functions called internally include interaction with external\\n    # contracts, they also have to be considered interaction with\\n    # external contracts.\\n\\n    # 1. Conditions\\n    # Check if auction endtime has been reached\\n    assert block.timestamp >= self.auctionEnd\\n    # Check if this function has already been called\\n    assert not self.ended\\n\\n    # 2. Effects\\n    self.ended = True\\n\\n    # 3. Interaction\\n    send(self.beneficiary, self.highestBid)\\n```\\n\\nThis example only has a constructor, two methods to call, and variables to manage the contract state. This is all we need for a basic implementation of an auction smart contract.\\n\\nLet’s get started!\\n\\n```python\\n# Auction params\\n# Beneficiary receives money from the highest bidder\\nbeneficiary: public(address)\\nauctionStart: public(timestamp)\\nauctionEnd: public(timestamp)\\n\\n# Current state of auction\\nhighestBidder: public(address)\\nhighestBid: public(wei_value)\\n\\n# Set to true at the end, disallows any change\\nended: public(bool)\\n```\\n\\nWe begin by declaring variables to keep track of our contract state. We initialize a global variable beneficiary by calling `public` on the datatype `address`. The beneficiary will be the receiver of money from the highest bidder. We also initialize the variables `auctionStart` and `auctionEnd` with the datatype `timestamp` to manage the open auction period and `highestBid` with datatype `wei_value`, the smallest denomination of ether, to manage auction state. The variable `ended` is a boolean to determine whether the auction is officially over.\\n\\nAll the variables are passed into the public function. By declaring the variable public, the variable is callable by external contracts. Initializing the variables without the public function defaults to a private declaration and thus only accessible to methods within the same contract. The public function additionally creates a ‘getter’ function for the variable, accessible through an external call such as `contract.beneficiary()`.\\n\\nNow, the constructor.\\n\\nThe contract is initialized with two arguments: `_beneficiary` of type `address` and `_bidding_time` with type `timedelta`, the time difference between the start and end of the auction. We store these two pieces of information into the contract variables `self.beneficiary` and `self.auctionEnd`. We have access to the current time by calling `block.timestamp`. `block` is an object available within any Vyper contract and provides information about the block at the time of calling. Similar to block, another important object available to us within the contract is `msg`, which provides information on the method caller.\\n\\nWith initial setup out of the way, lets look at how our users can make bids.\\n\\nThe `@payable` decorator allows a user to send some ether to the contract in order to call the decorated method. In this case, a user wanting to make a bid calls the `bid()` method while sending an amount equal to their desired bid (not including gas fees). When calling any method within a contract, we are provided with a built-in variable `msg` and we can access the public address of any method caller with `msg.sender`. Similarly, the amount of ether a user sends can be accessed by calling `msg.value`.\\n\\nWe first check whether the current time is before the auction’s end time using the `assert` function which takes any boolean statement. We also check to see if the new bid is greater than the highest bid. If the two assert statements pass, we can safely continue to the next lines; otherwise, the `bid()` method throws an error and reverts the transaction. If the two assert statements and the check that the previous bid is not equal to zero pass, we can safely conclude that we have a valid new highest bid. We send back the previous `highestBid` to the previous `highestBidder` and set our new `highestBid` and `highestBidder`.\\n\\nWith the `endAuction()` method, we check whether our current time is past the `auctionEnd` time we set upon initialization of the contract. We also check that `self.ended` had not previously been set to `True`. We do this to prevent any calls to the method if the auction had already ended, which could potentially be malicious if the check had not been made. We then officially end the auction by setting `self.ended` to `True` and sending the highest bid amount to the beneficiary.\\n\\n## Next Steps\\n\\nThis introduction and example was taken from [the official Vyper documentation](https://vyper.readthedocs.io/), which is your best resource. Recommended next steps are:\\n\\n-   [Vyper by example](https://vyper.readthedocs.io/en/latest/vyper-by-example.html)\\n-   [Structure of a contract](https://vyper.readthedocs.io/en/latest/structure-of-a-contract.html)\\n"}',
                            authorId:
                                '37648fc15a8365735289e002d65d44d80c505e8b',
                            dateCreated: '2019-04-30T01:21:05.766Z',
                            datePublished: '2019-04-30T01:21:11.860Z',
                            status: 'PUBLISHED',
                            attributes: {
                                background:
                                    'https://api.kauri.io:443/ipfs/QmUUT6kMFq1jqXJQPKizRqq9ziGKSBejSjAG7yFjgPAotD',
                            },
                            contentHash:
                                'QmZy9DsHhcRGeR3QsnsRPinxQv56YdXoRirYu9wYANDjLk',
                            checkpoint:
                                'QmUatCmc2dGQXj7JyC6Pi3VhQLZ9mcBh5D22CimUXddbtw',
                            tags: ['ethereum', 'smart-contracts', 'vyper'],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                resourceIdentifier: {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    name: 'Kauri Team',
                                    username: 'kauri',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                    ],
                    __typename: 'SectionDTO',
                },
                {
                    name: 'Token Standards',
                    description:
                        'Smart contracts all follow token standards, these are the ones you need to know.',
                    resources: [
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: '028ff6bf2fa0432191371e6d39398ba6',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 1,
                            },
                            description:
                                'A History of Exchange We’re all familiar with currency exchanges. They come in various online and offline forms and are what people often use for trading one currency to another when speculating or traveling to a new country. Currency exchange has its roots in ancient times, the Byzantine government, for example, maintained a monopoly on currency exchange. Modern exchanges started during the 15th century when the Italian banking family Medici opened banks to exchange currencies in foreign nation',
                            id: '028ff6bf2fa0432191371e6d39398ba6',
                            version: 1,
                            title:
                                'Cute Kitties and Where to Find Them — An Introduction to Non-Fungible Tokens ',
                            content:
                                '{"markdown":"## A History of Exchange\\n\\nWe’re all familiar with currency exchanges. They come in various online and offline forms and are what people often use for trading one currency to another when speculating or traveling to a new country.\\n\\nCurrency exchange has its roots in ancient times, the Byzantine government, for example, maintained a monopoly on currency exchange. Modern exchanges started during the 15th century when the Italian banking family Medici opened banks to exchange currencies in foreign nations. There are ledgers dating back to 1704 in Amsterdam that show the existence of an active [Forex market](https://www.investopedia.com/terms/forex/f/forex-market.asp). Nowadays, [fiat](https://en.wikipedia.org/wiki/Fiat_money) exchanges are often performed through banks, brokers, and online.\\n\\nWith the advent of CryptoAssets, the world witnessed an abundance of new exchanges for exchanging fiat currencies to CryptoAssets or swapping one CryptoAsset to another. Some of these exchanges (i.e., [Binance](https://www.binance.com/en), [Coinbase](https://www.coinbase.com)) are centralized, while others (i.e., [IDEX](https://idex.market/), [Waves](https://wavesplatform.com)) are decentralized. While each approach has its limitations and fallibilities, one of the concerns with CryptoAssets is the vulnerability of token ownership and exchange as a result of centralization—vulnerabilities such as censorship and hacking. At the same time, decentralized exchanges have traditionally struggled with issues such as illiquidity and fees associated with requiring every new order or adjustment to go through the blockchain (on-chain transactions), resulting in slower transaction times and extra fees.\\n\\nProjects such as [0x](https://0x.org/) have provided a solution for some of the limitations of decentralized exchanges. By creating a standard protocol on the Ethereum blockchain, they allow third-party relayers to build decentralized exchanges that host orders off-chain and bring them on-chain to settle the order. As a result, it’s an ideal protocol for platforms such as video games that exchange digital collectibles, art, and other CryptoAssets.\\n\\nA collectible is an item that is often unique in characteristics and valued by collectors. The history of collecting special items date back to ancient history, and it’s also seen in other animals, such as Bowerbirds. Modern day collectors often collect items for their future value, but many do it as a hobby. There are items that are manufactured, specifically, to be collected. Cigarette cards in the late nineteenth century were one of the first manufactured collectibles, then came the era of sports cards representing favorite players, and in the 90’s the different designs of Beanie Babies. Digital collectibles are the most recent form of valued items.\\n\\n## Non-Fungible Tokens and Ethereum Improvement Proposals\\n\\nIn the early days of Ethereum, it wasn’t possible to create collectibles, because digital items were fungible and replicable, but thanks to an [Ethereum Improvement Proposal (EIP)](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1.md), and the [EIP-721 token standard proposal](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md), it became possible to create non-fungible digital items.\\n\\nThe Ethereum foundation has a process for suggesting modifications to the Ethereum protocol. Anyone wanting to change or add a feature to the protocol can do so through submitting an EIP. If the community approves an EIP, it’s incorporated into the protocol. EIP-721 allowed for the creation of Non-fungible Tokens (NFTs), an authentic digital scarcity that is verifiable within the network without needing any intermediaries, such as central exchanges.\\n\\n## ERC-721 Contracts\\n\\nHere is a basic example of an ERC-721 contract, borrowed from <https://gist.github.com/aunyks/2d148a77150247f6f9745286ff46fc53#file-erc721-definitions-sol>:\\n\\n```solidity\\ncontract ERC721 {\\n   // ERC20 compatible functions\\n   function name() constant returns (string name);\\n   function symbol() constant returns (string symbol);\\n   function totalSupply() constant returns (uint256 totalSupply);\\n   function balanceOf(address _owner) constant returns (uint balance);\\n   // Functions that define ownership\\n   function ownerOf(uint256 _tokenId) constant returns (address owner);\\n   function approve(address _to, uint256 _tokenId);\\n   function takeOwnership(uint256 _tokenId);\\n   function transfer(address _to, uint256 _tokenId);\\n   function tokenOfOwnerByIndex(address _owner, uint256 _index) constant returns (uint tokenId);\\n   // Token metadata\\n   function tokenMetadata(uint256 _tokenId) constant returns (string infoUrl);\\n   // Events\\n   event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);\\n   event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);\\n}\\n```\\n\\nFor a full overview of the fields and what they mean, read Gerald Nash’s essay on [The Anatomy of ERC-721](https://medium.com/crypto-currently/the-anatomy-of-erc721-e9db77abfc24). Here’s a brief overview of the main functions and events:\\n\\n- `name`: The full name of your token (e.g., MountainGoatMutineer)\\n- `symbol`: An abbreviation for your token (e.g., MGM)\\n- `totalSupply`: Returns the number of coins available on the ledger\\n- `balanceOf`: Shows how many tokens are on a particular address\\n- `ownerOf`: Returns the address of a token’s owner\\n- `approve`: Grants authority to another entity to transfer tokens on behalf of the owner\\n- `takeOwnership`: Acts like a withdraw function. It allows a new owner to withdraw tokens from another account and into their account.\\n- `transfer`: Allows the owner of a token to transfer their token to another user.\\n- `tokenOfOwnerByIndex`: Though optional, this function allows users to retrieve individual tokens by its index in the list of tokens they own\\n- `tokenMetadata`: Though optional, this function allows us to find information on an NFT (e.g., through an HTTP link or IPFS hash)\\n- `Transfer`: This event broadcasts the sending and receiving addresses, and the token ID that was transferred\\n- `Approval`: This event fires whenever another user is approved to take ownership of a token\\n\\nIn the words of the creators, the rationale for ERC-721 is that:\\n\\n> There are many proposed uses of Ethereum smart contracts that depend on tracking distinguishable assets. Examples of existing or planned NFTs are [LAND in Decentraland](https://market.decentraland.org), [the eponymous punks in CryptoPunks](https://www.larvalabs.com/cryptopunks), and in-game items using systems like [DMarket](https://dmarket.com) or [EnjinCoin](https://enjincoin.io). Future uses include tracking real-world assets, like real-estate (as envisioned by companies like [Ubitquity](https://www.ubitquity.io) or [Propy](https://propy.com). It is critical in each of these cases that these items are not \\"lumped together\\" as numbers in a ledger, but instead, each asset must have its ownership individually and atomically tracked.\\n\\n## NFTs and Games\\n\\nYou might be familiar with the game [CryptoKitties](https://www.cryptokitties.co/) where people can buy a unique Kittie with Ether, the native currency of the Ethereum protocol. Each Kittie is an NFT, meaning that each Kittie is unique in shape, characteristics, and thus value.\\n\\nIdeally, those who want to buy, sell, or exchange NFTs should be able to without relying on a central exchange to perform their transactions. In addition to problems such as censorship and hacking caused by centralization, people might want to exchange NFTs tens of times a year, buying, selling, exchanging, and so forth. Multiple intermediaries that take a cut each time a trade occurs wouldn’t be as fluid as a peer-to-peer asset trading experience. Another advantage offered by decentralization is that if a hostile state decides to impose its power on exchanges that operate in its country, it would have an easy time doing so with a centralized exchanges, but not with decentralized ones. By taking intermediaries out of the picture, we can solve the vulnerability of centralization and remove the rent-seeker in the middle. In practice, a digital game with various characters can use the 0x protocol to create an exchange that allows their gamers to trade with one another directly and sell them on the exchange for Ether.\\n\\nFor example, the [Origin project has partnered with Dig Star](https://medium.com/originprotocol/origin-metaps-to-build-a-decentralized-marketplace-for-non-fungible-tokens-nfts-387e5d29c437), a character creation game built on Ethereum to do something similar. Anyone can download the game and exchange digital characters on the Origin exchange. In the game, there is a mineral called “Cp” which only creatures traded on the exchange can mine. Gamers can sell the minerals they mine with them for Ether on the same ecosystem.\\n\\nAnother game called, [God’s Unchained](https://godsunchained.com/), is using 0x to sell players unique cards, including limited edition ones, while they’re on presale. Because the cards comply with ERC-721, players can prove the rarity of their cards, and trade them for Ether.\\n\\nHistorically, game publishers were a centralized authority that owned the objects players bought on the game, but that’s no longer the case. With NFTs, players can own the token and if the code permits, take it from one game to another. If the game shuts down, the players still have their token. 0x makes it possible for peer-to-peer transfers, the same as trading baseball cards with friends, but without strict digital-rights-management policies.\\n\\n## ERC-1155, the Future?\\n\\nWhile ERC-721 allows for a new class of assets to exist and give collectors the opportunity to collect digital items, it has some limitation. For this reason, developers have proposed [ERC-1155](https://github.com/ethereum/eips/issues/1155), perhaps the topic for an upcoming article."}',
                            authorId:
                                '6926c6f87259d725b9af60a375348715be04eda2',
                            dateCreated: '2019-03-12T13:21:45.345Z',
                            datePublished: '2019-03-12T13:22:06.391Z',
                            status: 'PUBLISHED',
                            attributes: {},
                            contentHash:
                                'QmYVfsjo9GmxR9BTRyRBYKrqjgLxgWtpwEv9i5XLtNkVz7',
                            checkpoint:
                                'QmPdEJy8FXXgR4ebuAgFTFcf6pqutAq8dtUsWxiE6G2hk5',
                            tags: ['erc721', 'nft'],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '6926c6f87259d725b9af60a375348715be04eda2',
                                name: 'Shayan Shokrgozar',
                                username: 'Transcendent',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmTuUsKnAKq1gtZ4NQXmNT2DsNAgKeY9DJ3FQR4bKP574F',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '6926c6f87259d725b9af60a375348715be04eda2',
                                name: 'Shayan Shokrgozar',
                                username: 'Transcendent',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmTuUsKnAKq1gtZ4NQXmNT2DsNAgKeY9DJ3FQR4bKP574F',
                                resourceIdentifier: {
                                    id:
                                        '6926c6f87259d725b9af60a375348715be04eda2',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '6926c6f87259d725b9af60a375348715be04eda2',
                                    name: 'Shayan Shokrgozar',
                                    username: 'Transcendent',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmTuUsKnAKq1gtZ4NQXmNT2DsNAgKeY9DJ3FQR4bKP574F',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'b382103e9496409c90c495f35940887e',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 1,
                            },
                            description:
                                'Simple Summary A standard interface for non-fungible tokens, also known as deeds. Abstract The following standard allows for the implementation of a standard API for NFTs within smart contracts. This standard provides basic functionality to track and transfer NFTs. We considered use cases of NFTs being owned and transacted by individuals as well as consignment to third party brokers/wallets/auctioneers (operators). NFTs can represent ownership over digital or physical assets. We considered a div',
                            id: 'b382103e9496409c90c495f35940887e',
                            version: 1,
                            title: 'ERC-721 Non-Fungible Token Standard',
                            content:
                                '{"markdown":"## Simple Summary\\n\\nA standard interface for non-fungible tokens, also known as deeds.\\n\\n## Abstract\\n\\nThe following standard allows for the implementation of a standard API for NFTs within smart contracts. This standard provides basic functionality to track and transfer NFTs.\\n\\nWe considered use cases of NFTs being owned and transacted by individuals as well as consignment to third party brokers/wallets/auctioneers (\\"operators\\"). NFTs can represent ownership over digital or physical assets. We considered a diverse universe of assets, and we know you will dream up many more:\\n\\n- Physical property — houses, unique artwork\\n- Virtual collectables — unique pictures of kittens, collectable cards\\n- \\"Negative value\\" assets — loans, burdens and other responsibilities\\n\\nIn general, all houses are distinct and no two kittens are alike. NFTs are *distinguishable* and you must track the ownership of each one separately.\\n\\n## Motivation\\n\\nA standard interface allows wallet/broker/auction applications to work with any NFT on Ethereum. We provide for simple ERC-721 smart contracts as well as contracts that track an *arbitrarily large* number of NFTs. Additional applications are discussed below.\\n\\nThis standard is inspired by the ERC-20 token standard and builds on two years of experience since EIP-20 was created. EIP-20 is insufficient for tracking NFTs because each asset is distinct (non-fungible) whereas each of a quantity of tokens is identical (fungible).\\n\\nDifferences between this standard and EIP-20 are examined below.\\n\\n## Specification\\n\\nThe key words \\"MUST\\", \\"MUST NOT\\", \\"REQUIRED\\", \\"SHALL\\", \\"SHALL NOT\\", \\"SHOULD\\", \\"SHOULD NOT\\", \\"RECOMMENDED\\", \\"MAY\\", and \\"OPTIONAL\\" in this document are to be interpreted as described in RFC 2119.\\n\\n**Every ERC-721 compliant contract must implement the `ERC721` and `ERC165` interfaces** (subject to \\"caveats\\" below):\\n\\n```solidity\\npragma solidity ^0.4.20;\\n\\n/// @title ERC-721 Non-Fungible Token Standard\\n/// @dev See https://eips.ethereum.org/EIPS/eip-721\\n///  Note: the ERC-165 identifier for this interface is 0x80ac58cd.\\ninterface ERC721 /* is ERC165 */ {\\n    /// @dev This emits when ownership of any NFT changes by any mechanism.\\n    ///  This event emits when NFTs are created (`from` == 0) and destroyed\\n    ///  (`to` == 0). Exception: during contract creation, any number of NFTs\\n    ///  may be created and assigned without emitting Transfer. At the time of\\n    ///  any transfer, the approved address for that NFT (if any) is reset to none.\\n    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);\\n\\n    /// @dev This emits when the approved address for an NFT is changed or\\n    ///  reaffirmed. The zero address indicates there is no approved address.\\n    ///  When a Transfer event emits, this also indicates that the approved\\n    ///  address for that NFT (if any) is reset to none.\\n    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);\\n\\n    /// @dev This emits when an operator is enabled or disabled for an owner.\\n    ///  The operator can manage all NFTs of the owner.\\n    event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);\\n\\n    /// @notice Count all NFTs assigned to an owner\\n    /// @dev NFTs assigned to the zero address are considered invalid, and this\\n    ///  function throws for queries about the zero address.\\n    /// @param _owner An address for whom to query the balance\\n    /// @return The number of NFTs owned by `_owner`, possibly zero\\n    function balanceOf(address _owner) external view returns (uint256);\\n\\n    /// @notice Find the owner of an NFT\\n    /// @dev NFTs assigned to zero address are considered invalid, and queries\\n    ///  about them do throw.\\n    /// @param _tokenId The identifier for an NFT\\n    /// @return The address of the owner of the NFT\\n    function ownerOf(uint256 _tokenId) external view returns (address);\\n\\n    /// @notice Transfers the ownership of an NFT from one address to another address\\n    /// @dev Throws unless `msg.sender` is the current owner, an authorized\\n    ///  operator, or the approved address for this NFT. Throws if `_from` is\\n    ///  not the current owner. Throws if `_to` is the zero address. Throws if\\n    ///  `_tokenId` is not a valid NFT. When transfer is complete, this function\\n    ///  checks if `_to` is a smart contract (code size > 0). If so, it calls\\n    ///  `onERC721Received` on `_to` and throws if the return value is not\\n    ///  `bytes4(keccak256(\\"onERC721Received(address,address,uint256,bytes)\\"))`.\\n    /// @param _from The current owner of the NFT\\n    /// @param _to The new owner\\n    /// @param _tokenId The NFT to transfer\\n    /// @param data Additional data with no specified format, sent in call to `_to`\\n    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable;\\n\\n    /// @notice Transfers the ownership of an NFT from one address to another address\\n    /// @dev This works identically to the other function with an extra data parameter,\\n    ///  except this function just sets data to \\"\\".\\n    /// @param _from The current owner of the NFT\\n    /// @param _to The new owner\\n    /// @param _tokenId The NFT to transfer\\n    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable;\\n\\n    /// @notice Transfer ownership of an NFT -- THE CALLER IS RESPONSIBLE\\n    ///  TO CONFIRM THAT `_to` IS CAPABLE OF RECEIVING NFTS OR ELSE\\n    ///  THEY MAY BE PERMANENTLY LOST\\n    /// @dev Throws unless `msg.sender` is the current owner, an authorized\\n    ///  operator, or the approved address for this NFT. Throws if `_from` is\\n    ///  not the current owner. Throws if `_to` is the zero address. Throws if\\n    ///  `_tokenId` is not a valid NFT.\\n    /// @param _from The current owner of the NFT\\n    /// @param _to The new owner\\n    /// @param _tokenId The NFT to transfer\\n    function transferFrom(address _from, address _to, uint256 _tokenId) external payable;\\n\\n    /// @notice Change or reaffirm the approved address for an NFT\\n    /// @dev The zero address indicates there is no approved address.\\n    ///  Throws unless `msg.sender` is the current NFT owner, or an authorized\\n    ///  operator of the current owner.\\n    /// @param _approved The new approved NFT controller\\n    /// @param _tokenId The NFT to approve\\n    function approve(address _approved, uint256 _tokenId) external payable;\\n\\n    /// @notice Enable or disable approval for a third party (\\"operator\\") to manage\\n    ///  all of `msg.sender`\'s assets\\n    /// @dev Emits the ApprovalForAll event. The contract MUST allow\\n    ///  multiple operators per owner.\\n    /// @param _operator Address to add to the set of authorized operators\\n    /// @param _approved True if the operator is approved, false to revoke approval\\n    function setApprovalForAll(address _operator, bool _approved) external;\\n\\n    /// @notice Get the approved address for a single NFT\\n    /// @dev Throws if `_tokenId` is not a valid NFT.\\n    /// @param _tokenId The NFT to find the approved address for\\n    /// @return The approved address for this NFT, or the zero address if there is none\\n    function getApproved(uint256 _tokenId) external view returns (address);\\n\\n    /// @notice Query if an address is an authorized operator for another address\\n    /// @param _owner The address that owns the NFTs\\n    /// @param _operator The address that acts on behalf of the owner\\n    /// @return True if `_operator` is an approved operator for `_owner`, false otherwise\\n    function isApprovedForAll(address _owner, address _operator) external view returns (bool);\\n}\\n\\ninterface ERC165 {\\n    /// @notice Query if a contract implements an interface\\n    /// @param interfaceID The interface identifier, as specified in ERC-165\\n    /// @dev Interface identification is specified in ERC-165. This function\\n    ///  uses less than 30,000 gas.\\n    /// @return `true` if the contract implements `interfaceID` and\\n    ///  `interfaceID` is not 0xffffffff, `false` otherwise\\n    function supportsInterface(bytes4 interfaceID) external view returns (bool);\\n}\\n```\\n\\nA wallet/broker/auction application MUST implement the **wallet interface** if it will accept safe transfers.\\n\\n```solidity\\n/// @dev Note: the ERC-165 identifier for this interface is 0x150b7a02.\\ninterface ERC721TokenReceiver {\\n    /// @notice Handle the receipt of an NFT\\n    /// @dev The ERC721 smart contract calls this function on the recipient\\n    ///  after a `transfer`. This function MAY throw to revert and reject the\\n    ///  transfer. Return of other than the magic value MUST result in the\\n    ///  transaction being reverted.\\n    ///  Note: the contract address is always the message sender.\\n    /// @param _operator The address which called `safeTransferFrom` function\\n    /// @param _from The address which previously owned the token\\n    /// @param _tokenId The NFT identifier which is being transferred\\n    /// @param _data Additional data with no specified format\\n    /// @return `bytes4(keccak256(\\"onERC721Received(address,address,uint256,bytes)\\"))`\\n    ///  unless throwing\\n    function onERC721Received(address _operator, address _from, uint256 _tokenId, bytes _data) external returns(bytes4);\\n}\\n```\\n\\nThe **metadata extension** is OPTIONAL for ERC-721 smart contracts (see \\"caveats\\", below). This allows your smart contract to be interrogated for its name and for details about the assets which your NFTs represent.\\n\\n```solidity\\n/// @title ERC-721 Non-Fungible Token Standard, optional metadata extension\\n/// @dev See https://eips.ethereum.org/EIPS/eip-721\\n///  Note: the ERC-165 identifier for this interface is 0x5b5e139f.\\ninterface ERC721Metadata /* is ERC721 */ {\\n    /// @notice A descriptive name for a collection of NFTs in this contract\\n    function name() external view returns (string _name);\\n\\n    /// @notice An abbreviated name for NFTs in this contract\\n    function symbol() external view returns (string _symbol);\\n\\n    /// @notice A distinct Uniform Resource Identifier (URI) for a given asset.\\n    /// @dev Throws if `_tokenId` is not a valid NFT. URIs are defined in RFC\\n    ///  3986. The URI may point to a JSON file that conforms to the \\"ERC721\\n    ///  Metadata JSON Schema\\".\\n    function tokenURI(uint256 _tokenId) external view returns (string);\\n}\\n```\\n\\nThis is the \\"ERC721 Metadata JSON Schema\\" referenced above.\\n\\n```json\\n{\\n    \\"title\\": \\"Asset Metadata\\",\\n    \\"type\\": \\"object\\",\\n    \\"properties\\": {\\n        \\"name\\": {\\n            \\"type\\": \\"string\\",\\n            \\"description\\": \\"Identifies the asset to which this NFT represents\\"\\n        },\\n        \\"description\\": {\\n            \\"type\\": \\"string\\",\\n            \\"description\\": \\"Describes the asset to which this NFT represents\\"\\n        },\\n        \\"image\\": {\\n            \\"type\\": \\"string\\",\\n            \\"description\\": \\"A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive.\\"\\n        }\\n    }\\n}\\n```\\n\\nThe **enumeration extension** is OPTIONAL for ERC-721 smart contracts (see \\"caveats\\", below). This allows your contract to publish its full list of NFTs and make them discoverable.\\n\\n```solidity\\n/// @title ERC-721 Non-Fungible Token Standard, optional enumeration extension\\n/// @dev See https://eips.ethereum.org/EIPS/eip-721\\n///  Note: the ERC-165 identifier for this interface is 0x780e9d63.\\ninterface ERC721Enumerable /* is ERC721 */ {\\n    /// @notice Count NFTs tracked by this contract\\n    /// @return A count of valid NFTs tracked by this contract, where each one of\\n    ///  them has an assigned and queryable owner not equal to the zero address\\n    function totalSupply() external view returns (uint256);\\n\\n    /// @notice Enumerate valid NFTs\\n    /// @dev Throws if `_index` >= `totalSupply()`.\\n    /// @param _index A counter less than `totalSupply()`\\n    /// @return The token identifier for the `_index`th NFT,\\n    ///  (sort order not specified)\\n    function tokenByIndex(uint256 _index) external view returns (uint256);\\n\\n    /// @notice Enumerate NFTs assigned to an owner\\n    /// @dev Throws if `_index` >= `balanceOf(_owner)` or if\\n    ///  `_owner` is the zero address, representing invalid NFTs.\\n    /// @param _owner An address where we are interested in NFTs owned by them\\n    /// @param _index A counter less than `balanceOf(_owner)`\\n    /// @return The token identifier for the `_index`th NFT assigned to `_owner`,\\n    ///   (sort order not specified)\\n    function tokenOfOwnerByIndex(address _owner, uint256 _index) external view returns (uint256);\\n}\\n```\\n\\n### Caveats\\n\\nThe 0.4.20 Solidity interface grammar is not expressive enough to document the ERC-721 standard. A contract which complies with ERC-721 MUST also abide by the following:\\n\\n- Solidity issue #3412: The above interfaces include explicit mutability guarantees for each function. Mutability guarantees are, in order weak to strong: `payable`, implicit nonpayable, `view`, and `pure`. Your implementation MUST meet the mutability guarantee in this interface and you MAY meet a stronger guarantee. For example, a `payable` function in this interface may be implemented as nonpayble (no state mutability specified) in your contract. We expect a later Solidity release will allow your stricter contract to inherit from this interface, but a workaround for version 0.4.20 is that you can edit this interface to add stricter mutability before inheriting from your contract.\\n- Solidity issue #3419: A contract that implements `ERC721Metadata` or `ERC721Enumerable` SHALL also implement `ERC721`. ERC-721 implements the requirements of interface ERC-165.\\n- Solidity issue #2330: If a function is shown in this specification as `external` then a contract will be compliant if it uses `public` visibility. As a workaround for version 0.4.20, you can edit this interface to switch to `public` before inheriting from your contract.\\n- Solidity issues #3494, #3544: Use of `this.*.selector` is marked as a warning by Solidity, a future version of Solidity will not mark this as an error.\\n\\n*If a newer version of Solidity allows the caveats to be expressed in code, then this EIP MAY be updated and the caveats removed, such will be equivalent to the original specification.*\\n\\n## Rationale\\n\\nThere are many proposed uses of Ethereum smart contracts that depend on tracking distinguishable assets. Examples of existing or planned NFTs are LAND in Decentraland, the eponymous punks in CryptoPunks, and in-game items using systems like DMarket or EnjinCoin. Future uses include tracking real-world assets, like real-estate (as envisioned by companies like Ubitquity or Propy. It is critical in each of these cases that these items are not \\"lumped together\\" as numbers in a ledger, but instead each asset must have its ownership individually and atomically tracked. Regardless of the nature of these assets, the ecosystem will be stronger if we have a standardized interface that allows for cross-functional asset management and sales platforms.\\n\\n**\\"NFT\\" Word Choice**\\n\\n\\"NFT\\" was satisfactory to nearly everyone surveyed and is widely applicable to a broad universe of distinguishable digital assets. We recognize that \\"deed\\" is very descriptive for certain applications of this standard (notably, physical property).\\n\\n*Alternatives considered: distinguishable asset, title, token, asset, equity, ticket*\\n\\n**NFT Identifiers**\\n\\nEvery NFT is identified by a unique `uint256` ID inside the ERC-721 smart contract. This identifying number SHALL NOT change for the life of the contract. The pair `(contract address, uint256 tokenId)` will then be a globally unique and fully-qualified identifier for a specific asset on an Ethereum chain. While some ERC-721 smart contracts may find it convenient to start with ID 0 and simply increment by one for each new NFT, callers SHALL NOT assume that ID numbers have any specific pattern to them, and MUST treat the ID as a \\"black box\\". Also note that a NFTs MAY become invalid (be destroyed). Please see the enumerations functions for a supported enumeration interface.\\n\\nThe choice of `uint256` allows a wide variety of applications because UUIDs and sha3 hashes are directly convertible to `uint256`.\\n\\n**Transfer Mechanism**\\n\\nERC-721 standardizes a safe transfer function `safeTransferFrom` (overloaded with and without a `bytes` parameter) and an unsafe function `transferFrom`. Transfers may be initiated by:\\n\\n- The owner of an NFT\\n- The approved address of an NFT\\n- An authorized operator of the current owner of an NFT\\n\\nAdditionally, an authorized operator may set the approved address for an NFT. This provides a powerful set of tools for wallet, broker and auction applications to quickly use a *large* number of NFTs.\\n\\nThe transfer and accept functions\' documentation only specify conditions when the transaction MUST throw. Your implementation MAY also throw in other situations. This allows implementations to achieve interesting results:\\n\\n- **Disallow transfers if the contract is paused** — prior art, CryptoKitties deployed contract, line 611\\n- **Blacklist certain address from receiving NFTs** — prior art, CryptoKitties deployed contract, lines 565, 566\\n- **Disallow unsafe transfers** — `transferFrom` throws unless `_to` equals `msg.sender` or `countOf(_to)` is non-zero or was non-zero previously (because such cases are safe)\\n- **Charge a fee to both parties of a transaction** — require payment when calling `approve` with a non-zero `_approved` if it was previously the zero address, refund payment if calling `approve` with the zero address if it was previously a non-zero address, require payment when calling any transfer function, require transfer parameter `_to` to equal `msg.sender`, require transfer parameter `_to` to be the approved address for the NFT\\n- **Read only NFT registry** — always throw from `unsafeTransfer`, `transferFrom`, `approve` and `setApprovalForAll`\\n\\nFailed transactions will throw, a best practice identified in ERC-223, ERC-677, ERC-827 and OpenZeppelin\'s implementation of SafeERC20.sol. ERC-20 defined an `allowance` feature, this caused a problem when called and then later modified to a different amount, as on OpenZeppelin issue \\\\#438. In ERC-721, there is no allowance because every NFT is unique, the quantity is none or one. Therefore we receive the benefits of ERC-20\'s original design without problems that have been later discovered.\\n\\nCreating of NFTs (\\"minting\\") and destruction NFTs (\\"burning\\") is not included in the specification. Your contract may implement these by other means. Please see the `event` documentation for your responsibilities when creating or destroying NFTs.\\n\\nWe questioned if the `operator` parameter on `onERC721Received` was necessary. In all cases we could imagine, if the operator was important then that operator could transfer the token to themself and then send it -- then they would be the `from` address. This seems contrived because we consider the operator to be a temporary owner of the token (and transferring to themself is redundant). When the operator sends the token, it is the operator acting on their own accord, NOT the operator acting on behalf of the token holder. This is why the operator and the previous token owner are both significant to the token recipient.\\n\\n*Alternatives considered: only allow two-step ERC-20 style transaction, require that transfer functions never throw, require all functions to return a boolean indicating the success of the operation.*\\n\\n**ERC-165 Interface**\\n\\nWe chose Standard Interface Detection (ERC-165) to expose the interfaces that a ERC-721 smart contract supports.\\n\\nA future EIP may create a global registry of interfaces for contracts. We strongly support such an EIP and it would allow your ERC-721 implementation to implement `ERC721Enumerable`, `ERC721Metadata`, or other interfaces by delegating to a separate contract.\\n\\n**Gas and Complexity** (regarding the enumeration extension)\\n\\nThis specification contemplates implementations that manage a few and *arbitrarily large* numbers of NFTs. If your application is able to grow then avoid using for/while loops in your code (see CryptoKitties bounty issue \\\\#4). These indicate your contract may be unable to scale and gas costs will rise over time without bound.\\n\\nWe have deployed a contract, XXXXERC721, to Testnet which instantiates and tracks 340282366920938463463374607431768211456 different deeds (2^128). That\'s enough to assign every IPV6 address to an Ethereum account owner, or to track ownership of nanobots a few micron in size and in aggregate totalling half the size of Earth. You can query it from the blockchain. And every function takes less gas than querying the ENS.\\n\\nThis illustration makes clear: the ERC-721 standard scales.\\n\\n*Alternatives considered: remove the asset enumeration function if it requires a for-loop, return a Solidity array type from enumeration functions.*\\n\\n**Privacy**\\n\\nWallets/brokers/auctioneers identified in the motivation section have a strong need to identify which NFTs an owner owns.\\n\\nIt may be interesting to consider a use case where NFTs are not enumerable, such as a private registry of property ownership, or a partially-private registry. However, privacy cannot be attained because an attacker can simply (!) call `ownerOf` for every possible `tokenId`.\\n\\n**Metadata Choices** (metadata extension)\\n\\nWe have required `name` and `symbol` functions in the metadata extension. Every token EIP and draft we reviewed (ERC-20, ERC-223, ERC-677, ERC-777, ERC-827) included these functions.\\n\\nWe remind implementation authors that the empty string is a valid response to `name` and `symbol` if you protest to the usage of this mechanism. We also remind everyone that any smart contract can use the same name and symbol as *your* contract. How a client may determine which ERC-721 smart contracts are well-known (canonical) is outside the scope of this standard.\\n\\nA mechanism is provided to associate NFTs with URIs. We expect that many implementations will take advantage of this to provide metadata for each NFT. The image size recommendation is taken from Instagram, they probably know much about image usability. The URI MAY be mutable (i.e. it changes from time to time). We considered an NFT representing ownership of a house, in this case metadata about the house (image, occupants, etc.) can naturally change.\\n\\nMetadata is returned as a string value. Currently this is only usable as calling from `web3`, not from other contracts. This is acceptable because we have not considered a use case where an on-blockchain application would query such information.\\n\\n*Alternatives considered: put all metadata for each asset on the blockchain (too expensive), use URL templates to query metadata parts (URL templates do not work with all URL schemes, especially P2P URLs), multiaddr network address (not mature enough)*\\n\\n**Community Consensus**\\n\\nA significant amount of discussion occurred on the original ERC-721 issue, additionally we held a first live meeting on Gitter that had good representation and well advertised (on Reddit, in the Gitter #ERC channel, and the original ERC-721 issue). Thank you to the participants:\\n\\n- [@ImAllInNow](https://github.com/imallinnow) Rob from DEC Gaming / Presenting Michigan Ethereum Meetup Feb 7\\n- [@Arachnid](https://github.com/arachnid) Nick Johnson\\n- [@jadhavajay](https://github.com/jadhavajay) Ajay Jadhav from AyanWorks\\n- [@superphly](https://github.com/superphly) Cody Marx Bailey - XRAM Capital / Sharing at hackathon Jan 20 / UN Future of Finance Hackathon.\\n- [@fulldecent](https://github.com/fulldecent) William Entriken\\n\\nA second event was held at ETHDenver 2018 to discuss distinguishable asset standards (notes to be published).\\n\\nWe have been very inclusive in this process and invite anyone with questions or contributions into our discussion. However, this standard is written only to support the identified use cases which are listed herein.\\n\\n## Backwards Compatibility\\n\\nWe have adopted `balanceOf`, `totalSupply`, `name` and `symbol` semantics from the ERC-20 specification. An implementation may also include a function `decimals` that returns `uint8(0)` if its goal is to be more compatible with ERC-20 while supporting this standard. However, we find it contrived to require all ERC-721 implementations to support the `decimals` function.\\n\\nExample NFT implementations as of February 2018:\\n\\n- CryptoKitties -- Compatible with an earlier version of this standard.\\n- CryptoPunks -- Partially ERC-20 compatible, but not easily generalizable because it includes auction functionality directly in the contract and uses function names that explicitly refer to the assets as \\"punks\\".\\n- Auctionhouse Asset Interface -- The author needed a generic interface for the Auctionhouse ÐApp (currently ice-boxed). His \\"Asset\\" contract is very simple, but is missing ERC-20 compatibility, `approve()` functionality, and metadata. This effort is referenced in the discussion for EIP-173.\\n\\nNote: \\"Limited edition, collectible tokens\\" like Curio Cards and Rare Pepe are *not* distinguishable assets. They\'re actually a collection of individual fungible tokens, each of which is tracked by its own smart contract with its own total supply (which may be `1` in extreme cases).\\n\\nThe `onERC721Received` function specifically works around old deployed contracts which may inadvertently return 1 (`true`) in certain circumstances even if they don\'t implement a function (see Solidity DelegateCallReturnValue bug). By returning and checking for a magic value, we are able to distinguish actual affirmative responses versus these vacuous `true`s.\\n\\n## Test Cases\\n\\n0xcert ERC-721 Token includes test cases written using Truffle.\\n\\n## Implementations\\n\\n0xcert ERC721 -- a reference implementation\\n\\n- MIT licensed, so you can freely use it for your projects\\n- Includes test cases\\n- Active bug bounty, you will be paid if you find errors\\n\\nSu Squares -- an advertising platform where you can rent space and place images\\n\\n- Complete the Su Squares Bug Bounty Program to seek problems with this standard or its implementation\\n- Implements the complete standard and all optional interfaces\\n\\nERC721ExampleDeed -- an example implementation\\n\\n- Implements using the OpenZeppelin project format\\n\\nXXXXERC721, by William Entriken -- a scalable example implementation\\n\\n- Deployed on testnet with 1 billion assets and supporting all lookups with the metadata extension. This demonstrates that scaling is NOT a problem.\\n\\n## References\\n\\n**Standards**\\n\\n1. ERC-20 Token Standard. https://eips.ethereum.org/EIPS/eip-20\\n1. ERC-165 Standard Interface Detection. https://eips.ethereum.org/EIPS/eip-165\\n1. ERC-173 Owned Standard. https://eips.ethereum.org/EIPS/eip-173\\n1. ERC-223 Token Standard. https://eips.ethereum.org/EIPS/eip-223\\n1. ERC-677 `transferAndCall` Token Standard. https://eips.ethereum.org/EIPS/eip-677\\n1. ERC-827 Token Standard. https://eips.ethereum.org/EIPS/eip-827\\n1. Ethereum Name Service (ENS). https://ens.domains\\n1. Instagram -- What\'s the Image Resolution? https://help.instagram.com/1631821640426723\\n1. JSON Schema. https://json-schema.org/\\n1. Multiaddr. https://github.com/multiformats/multiaddr\\n1. RFC 2119 Key words for use in RFCs to Indicate Requirement Levels. https://www.ietf.org/rfc/rfc2119.txt\\n\\n**Issues**\\n\\n1. The Original ERC-721 Issue. https://github.com/ethereum/eips/issues/721\\n1. Solidity Issue \\\\#2330 -- Interface Functions are External. https://github.com/ethereum/solidity/issues/2330\\n1. Solidity Issue \\\\#3412 -- Implement Interface: Allow Stricter Mutability. https://github.com/ethereum/solidity/issues/3412\\n1. Solidity Issue \\\\#3419 -- Interfaces Can\'t Inherit. https://github.com/ethereum/solidity/issues/3419\\n1. Solidity Issue \\\\#3494 -- Compiler Incorrectly Reasons About the `selector` Function. https://github.com/ethereum/solidity/issues/3494\\n1. Solidity Issue \\\\#3544 -- Cannot Calculate Selector of Function Named `transfer`. https://github.com/ethereum/solidity/issues/3544\\n1. CryptoKitties Bounty Issue \\\\#4 -- Listing all Kitties Owned by a User is `O(n^2)`. https://github.com/axiomzen/cryptokitties-bounty/issues/4\\n1. OpenZeppelin Issue \\\\#438 -- Implementation of `approve` method violates ERC20 standard. https://github.com/OpenZeppelin/zeppelin-solidity/issues/438\\n1. Solidity DelegateCallReturnValue Bug. https://solidity.readthedocs.io/en/develop/bugs.html#DelegateCallReturnValue\\n\\n**Discussions**\\n\\n1. Reddit (announcement of first live discussion). https://www.reddit.com/r/ethereum/comments/7r2ena/friday_119_live_discussion_on_erc_nonfungible/\\n1. Gitter #EIPs (announcement of first live discussion). https://gitter.im/ethereum/EIPs?at=5a5f823fb48e8c3566f0a5e7\\n1. ERC-721 (announcement of first live discussion). https://github.com/ethereum/eips/issues/721#issuecomment-358369377\\n1. ETHDenver 2018. https://ethdenver.com\\n\\n**NFT Implementations and Other Projects**\\n\\n1. CryptoKitties. https://www.cryptokitties.co\\n1. 0xcert ERC-721 Token. https://github.com/0xcert/ethereum-erc721\\n1. Su Squares. https://tenthousandsu.com\\n1. Decentraland. https://decentraland.org\\n1. CryptoPunks. https://www.larvalabs.com/cryptopunks\\n1. DMarket. https://www.dmarket.io\\n1. Enjin Coin. https://enjincoin.io\\n1. Ubitquity. https://www.ubitquity.io\\n1. Propy. https://tokensale.propy.com\\n1. CryptoKitties Deployed Contract. https://etherscan.io/address/0x06012c8cf97bead5deae237070f9587f8e7a266d#code\\n1. Su Squares Bug Bounty Program. https://github.com/fulldecent/su-squares-bounty\\n1. XXXXERC721. https://github.com/fulldecent/erc721-example\\n1. ERC721ExampleDeed. https://github.com/nastassiasachs/ERC721ExampleDeed\\n1. Curio Cards. https://mycuriocards.com\\n1. Rare Pepe. https://rarepepewallet.com\\n1. Auctionhouse Asset Interface. https://github.com/dob/auctionhouse/blob/master/contracts/Asset.sol\\n1. OpenZeppelin SafeERC20.sol Implementation. https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/ERC20/SafeERC20.sol\\n\\n## Copyright\\n\\nCopyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).\\n"}',
                            authorId:
                                '37648fc15a8365735289e002d65d44d80c505e8b',
                            dateCreated: '2019-04-16T04:50:52.413Z',
                            datePublished: '2019-04-16T04:50:56.291Z',
                            status: 'PUBLISHED',
                            attributes: {
                                origin_url:
                                    'https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md',
                                background:
                                    'https://api.kauri.io:443/ipfs/QmcGSuCmQPfGWD838Bu8GMJU2QRauEsBUR9DkdGE6BiJkH',
                            },
                            contentHash:
                                'QmXuHPSA4YpuECHUkieZaxXneNDXVoXSEd7NPBAY1nXi1y',
                            checkpoint:
                                'QmZMkjdgw5aBLWgEcg5BX9GTEHYcZi9MpnBGm6CvZgnr15',
                            tags: [
                                'ethereum',
                                'erc-721',
                                'token-standard',
                                'eip',
                                'erc721',
                            ],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                resourceIdentifier: {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    name: 'Kauri Team',
                                    username: 'kauri',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'd3e24cbf13fd4af9892773552555c480',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 1,
                            },
                            description:
                                'Simple Summary A standard interface for tokens. Abstract The following standard allows for the implementation of a standard API for tokens within smart contracts. This standard provides basic functionality to transfer tokens, as well as allow tokens to be approved so they can be spent by another on-chain third party. Motivation A standard interface allows any tokens on Ethereum to be re-used by other applications: from wallets to decentralized exchanges. Specification Token Methods NOTES: - The',
                            id: 'd3e24cbf13fd4af9892773552555c480',
                            version: 1,
                            title: 'ERC-20 Token Standard',
                            content:
                                '{"markdown":"## Simple Summary\\n\\nA standard interface for tokens.\\n\\n\\n## Abstract\\n\\nThe following standard allows for the implementation of a standard API for tokens within smart contracts.\\nThis standard provides basic functionality to transfer tokens, as well as allow tokens to be approved so they can be spent by another on-chain third party.\\n\\n\\n## Motivation\\n\\nA standard interface allows any tokens on Ethereum to be re-used by other applications: from wallets to decentralized exchanges.\\n\\n\\n## Specification\\n\\n## Token\\n### Methods\\n\\n**NOTES**:\\n - The following specifications use syntax from Solidity `0.4.17` (or above)\\n - Callers MUST handle `false` from `returns (bool success)`.  Callers MUST NOT assume that `false` is never returned!\\n\\n\\n#### name\\n\\nReturns the name of the token - e.g. `\\"MyToken\\"`.\\n\\nOPTIONAL - This method can be used to improve usability,\\nbut interfaces and other contracts MUST NOT expect these values to be present.\\n\\n\\n``` js\\nfunction name() public view returns (string)\\n```\\n\\n\\n#### symbol\\n\\nReturns the symbol of the token. E.g. \\"HIX\\".\\n\\nOPTIONAL - This method can be used to improve usability,\\nbut interfaces and other contracts MUST NOT expect these values to be present.\\n\\n``` js\\nfunction symbol() public view returns (string)\\n```\\n\\n\\n\\n#### decimals\\n\\nReturns the number of decimals the token uses - e.g. `8`, means to divide the token amount by `100000000` to get its user representation.\\n\\nOPTIONAL - This method can be used to improve usability,\\nbut interfaces and other contracts MUST NOT expect these values to be present.\\n\\n``` js\\nfunction decimals() public view returns (uint8)\\n```\\n\\n\\n#### totalSupply\\n\\nReturns the total token supply.\\n\\n``` js\\nfunction totalSupply() public view returns (uint256)\\n```\\n\\n\\n\\n#### balanceOf\\n\\nReturns the account balance of another account with address `_owner`.\\n\\n``` js\\nfunction balanceOf(address _owner) public view returns (uint256 balance)\\n```\\n\\n\\n\\n#### transfer\\n\\nTransfers `_value` amount of tokens to address `_to`, and MUST fire the `Transfer` event.\\nThe function SHOULD `throw` if the message caller\'s account balance does not have enough tokens to spend.\\n\\n*Note* Transfers of 0 values MUST be treated as normal transfers and fire the `Transfer` event.\\n\\n``` js\\nfunction transfer(address _to, uint256 _value) public returns (bool success)\\n```\\n\\n\\n\\n#### transferFrom\\n\\nTransfers `_value` amount of tokens from address `_from` to address `_to`, and MUST fire the `Transfer` event.\\n\\nThe `transferFrom` method is used for a withdraw workflow, allowing contracts to transfer tokens on your behalf.\\nThis can be used for example to allow a contract to transfer tokens on your behalf and/or to charge fees in sub-currencies.\\nThe function SHOULD `throw` unless the `_from` account has deliberately authorized the sender of the message via some mechanism.\\n\\n*Note* Transfers of 0 values MUST be treated as normal transfers and fire the `Transfer` event.\\n\\n``` js\\nfunction transferFrom(address _from, address _to, uint256 _value) public returns (bool success)\\n```\\n\\n\\n\\n#### approve\\n\\nAllows `_spender` to withdraw from your account multiple times, up to the `_value` amount. If this function is called again it overwrites the current allowance with `_value`.\\n\\n**NOTE**: To prevent attack vectors like the one [described here](https://docs.google.com/document/d/1YLPtQxZu1UAvO9cZ1O2RPXBbT0mooh4DYKjA_jp-RLM/) and discussed [here](https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729),\\nclients SHOULD make sure to create user interfaces in such a way that they set the allowance first to `0` before setting it to another value for the same spender.\\nTHOUGH The contract itself shouldn\'t enforce it, to allow backwards compatibility with contracts deployed before\\n\\n``` js\\nfunction approve(address _spender, uint256 _value) public returns (bool success)\\n```\\n\\n\\n#### allowance\\n\\nReturns the amount which `_spender` is still allowed to withdraw from `_owner`.\\n\\n``` js\\nfunction allowance(address _owner, address _spender) public view returns (uint256 remaining)\\n```\\n\\n\\n\\n### Events\\n\\n\\n#### Transfer\\n\\nMUST trigger when tokens are transferred, including zero value transfers.\\n\\nA token contract which creates new tokens SHOULD trigger a Transfer event with the `_from` address set to `0x0` when tokens are created.\\n\\n``` js\\nevent Transfer(address indexed _from, address indexed _to, uint256 _value)\\n```\\n\\n\\n\\n#### Approval\\n\\nMUST trigger on any successful call to `approve(address _spender, uint256 _value)`.\\n\\n``` js\\nevent Approval(address indexed _owner, address indexed _spender, uint256 _value)\\n```\\n\\n\\n\\n## Implementation\\n\\nThere are already plenty of ERC20-compliant tokens deployed on the Ethereum network.\\nDifferent implementations have been written by various teams that have different trade-offs: from gas saving to improved security.\\n\\n#### Example implementations are available at\\n- [OpenZeppelin implementation](https://github.com/OpenZeppelin/openzeppelin-solidity/blob/9b3710465583284b8c4c5d2245749246bb2e0094/contracts/token/ERC20/ERC20.sol)\\n- [ConsenSys implementation](https://github.com/ConsenSys/Tokens/blob/fdf687c69d998266a95f15216b1955a4965a0a6d/contracts/eip20/EIP20.sol)\\n\\n\\n## History\\n\\nHistorical links related to this standard:\\n\\n- Original proposal from Vitalik Buterin: https://github.com/ethereum/wiki/wiki/Standardized_Contract_APIs/499c882f3ec123537fc2fccd57eaa29e6032fe4a\\n- Reddit discussion: https://www.reddit.com/r/ethereum/comments/3n8fkn/lets_talk_about_the_coin_standard/\\n- Original Issue #20: https://github.com/ethereum/EIPs/issues/20\\n\\n\\n\\n## Copyright\\nCopyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).\\n"}',
                            authorId:
                                '37648fc15a8365735289e002d65d44d80c505e8b',
                            dateCreated: '2019-04-16T04:50:19.160Z',
                            datePublished: '2019-04-16T04:50:22.498Z',
                            status: 'PUBLISHED',
                            attributes: {
                                origin_url:
                                    'https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md',
                                background:
                                    'https://api.kauri.io:443/ipfs/QmcGSuCmQPfGWD838Bu8GMJU2QRauEsBUR9DkdGE6BiJkH',
                            },
                            contentHash:
                                'QmVQvhwoyDrRYVTKS7PwwrtKE22yAKrNEA948JTQhKDTXk',
                            checkpoint:
                                'QmZMkjdgw5aBLWgEcg5BX9GTEHYcZi9MpnBGm6CvZgnr15',
                            tags: [
                                'erc20',
                                'ethereum',
                                'erc-20',
                                'token-standard',
                                'eip',
                            ],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '37648fc15a8365735289e002d65d44d80c505e8b',
                                name: 'Kauri Team',
                                username: 'kauri',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                resourceIdentifier: {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '37648fc15a8365735289e002d65d44d80c505e8b',
                                    name: 'Kauri Team',
                                    username: 'kauri',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmRVCyQ3ng5AWGmjodzXcxg1LK9CRvePmd6ciDXY1mLofY',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'e05b1433dfa6434dba2788df96f423e9',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 1,
                            },
                            description:
                                'ERC 20 Tokens are creating a rage in the cryptocurrency sector and you wouldn’t want to be left behind, would you? Anyone who is keen to know the functionality involved in an ERC-20 token creation and deployment is welcomed. Let’s get started. What is an ERC-20 Token? Ethereum Request For Comments 20(ERC 20) is a protocol standard that defines certain rules and standards for issuing tokens on Ethereum’s network. A Token developed on Ethereum Blockchain is said to be an ERC-20 compliant only if i',
                            id: 'e05b1433dfa6434dba2788df96f423e9',
                            version: 1,
                            title: 'Develop your ERC-20 Token — explained!',
                            content:
                                '{"markdown":"ERC 20 Tokens are creating a rage in the cryptocurrency sector and you wouldn’t want to be left behind, would you? Anyone who is keen to know the functionality involved in an ERC-20 token creation and deployment is welcomed. Let’s get started.\\n \\n**What is an ERC-20 Token?**\\n \\n\\n![](https://api.kauri.io:443/ipfs/QmWa5PaKwACzkbbCdDDJbLgjuDGZEoJyjuB2QS9MV3oBqk)\\n\\nEthereum Request For Comments 20(ERC 20) is a protocol standard that defines certain rules and standards for issuing tokens on Ethereum’s network.\\nA Token developed on Ethereum Blockchain is said to be an ERC-20 compliant only if it includes the basic functions defined by the protocol in its smart contract. The functions defined in the protocol are :\\n\\n```\\n// ERC Token Standard #20 Interface\\n// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md\\n```\\n\\n\\n\\n```\\ncontract ERC20Interface {\\n    function totalSupply() public constant returns (uint);\\n    function balanceOf(address tokenOwner) public constant returns (uint balance);\\n    function allowance(address tokenOwner, address spender) public constant returns (uint remaining);\\n    function transfer(address to, uint tokens) public returns (bool success);\\n    function approve(address spender, uint tokens) public returns (bool success);\\n    function transferFrom(address from, address to, uint tokens) public returns (bool success);\\n```\\n\\n\\n\\n```\\n    event Transfer(address indexed from, address indexed to, uint tokens);\\n    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);\\n}\\n```\\n\\n\\nThe Ethereum community created this protocol so that a token can be shared, exchanged for other tokens, or transferred to a crypto-wallet as effortlessly as possible.\\n \\n**Things required to develop a Token.**\\n \\nProficiency in Solidity, the official language to write smart-contracts on Ethereum Blockchain. The only hackable module in your Blockchain Project is your smart contract, So one should give utmost importance to its development as we do at \\n[Unbox Innovation.](https://www.unboxinnovations.com/)\\n .\\nAlso this\\n\\n\\n\\n * Ethereum Address (Ropsten Network)\\n\\n * Some Ethereum (Ropsten Network)\\n\\n * A text editor (I.e. Sublime / Atom)\\n\\n * Solidity contract\\n \\n**Let’s jump into the code.**\\n \\nThe Ethereum community created these standards with three optional rules, and six mandatory.\\n \\n**Optional**\\n \\n\\n\\n\\n * Token Name\\n\\n * Symbol\\n\\n * Decimal (up to 18)\\n \\n**Mandatory**\\n \\n\\n\\n\\n * totalSupply: _identifies the total number of ERC-20 tokens created._ \\n\\n * balanceOf: _it returns the number of tokens a given address has in its account._ \\n\\n * transfer: _allows a certain number of tokens to be transferred from the total supply to a user account._ \\n\\n * transferFrom: _is the function that allows a user to transfer tokens to another user._ \\n\\n * approve : _checks a transaction against the total supply of tokens._ \\n\\n * allowance: _function checks the balance of the user’s account and will cancel the transaction if there are insufficient tokens._ \\nA sample smart contract implementing all the protocol is defined here. The comments will guide you when you are inside.\\n\\n<body><style>.gist .gist-file { margin-bottom: 0 !important; }.gist { text-rendering: auto; }</style><script charset=\\"utf-8\\" src=\\"https://gist.github.com/Yara1990/657a73c2c8c0be2039ac72934f914913.js\\"></script><script>var height = -1; var delayMs = 200;function notifyResize(height) {height = height ? height : document.documentElement.offsetHeight; var resized = false; if (window.donkey && donkey.resize) {donkey.resize(height); resized = true;}if (parent && parent._resizeIframe) {var obj = {iframe: window.frameElement, height: height}; parent._resizeIframe(obj); resized = true;}if (window.location && window.location.hash === \\"#amp=1\\" && window.parent && window.parent.postMessage) {window.parent.postMessage({sentinel: \\"amp\\", type: \\"embed-size\\", height: height}, \\"*\\");}if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.resize) {window.webkit.messageHandlers.resize.postMessage(height); resized = true;}return resized;}function maybeResize() {if (document.documentElement.offsetHeight != height && notifyResize()) {height = document.documentElement.offsetHeight;}delayMs = Math.min(delayMs * 2, 1000000); setTimeout(maybeResize, delayMs);}maybeResize();</script></body>\\n\\n\\n```\\npragma solidity ^0.4.18;\\n\\n// ----------------------------------------------------------------------------\\n// \'Banana\' token contract\\n//\\n// Deployed to : 0x5A86f0cafD4ef3ba4f0344C138afcC84bd1ED222\\n// Symbol      : BAN\\n// Name        : Banana Token\\n// Total supply: 100000000000000000000000000\\n// Decimals    : 18\\n//\\n// ----------------------------------------------------------------------------\\n\\n\\n// ----------------------------------------------------------------------------\\n// Safe maths\\n// ----------------------------------------------------------------------------\\ncontract SafeMath {\\n    function safeAdd(uint a, uint b) public pure returns (uint c) {\\n        c = a + b;\\n        require(c &gt;= a);\\n    }\\n    function safeSub(uint a, uint b) public pure returns (uint c) {\\n        require(b &lt;= a);\\n        c = a - b;\\n    }\\n    function safeMul(uint a, uint b) public pure returns (uint c) {\\n        c = a * b;\\n        require(a == 0 || c / a == b);\\n    }\\n    function safeDiv(uint a, uint b) public pure returns (uint c) {\\n        require(b &gt; 0);\\n        c = a / b;\\n    }\\n}\\n\\n\\n// ----------------------------------------------------------------------------\\n// ERC Token Standard #20 Interface\\n// https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md\\n// ----------------------------------------------------------------------------\\ncontract ERC20Interface {\\n    function totalSupply() public constant returns (uint);\\n    function balanceOf(address tokenOwner) public constant returns (uint balance);\\n    function allowance(address tokenOwner, address spender) public constant returns (uint remaining);\\n    function transfer(address to, uint tokens) public returns (bool success);\\n    function approve(address spender, uint tokens) public returns (bool success);\\n    function transferFrom(address from, address to, uint tokens) public returns (bool success);\\n\\n    event Transfer(address indexed from, address indexed to, uint tokens);\\n    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);\\n}\\n\\n\\n// ----------------------------------------------------------------------------\\n// Contract function to receive approval and execute function in one call\\n// ----------------------------------------------------------------------------\\ncontract ApproveAndCallFallBack {\\n    function receiveApproval(address from, uint256 tokens, address token, bytes data) public;\\n}\\n\\n\\n// ----------------------------------------------------------------------------\\n// Owned contract\\n// ----------------------------------------------------------------------------\\ncontract Owned {\\n    address public owner;\\n    address public newOwner;\\n\\n    event OwnershipTransferred(address indexed _from, address indexed _to);\\n\\n    function Owned() public {\\n        owner = msg.sender;\\n    }\\n\\n    modifier onlyOwner {\\n        require(msg.sender == owner);\\n        _;\\n    }\\n\\n    function transferOwnership(address _newOwner) public onlyOwner {\\n        newOwner = _newOwner;\\n    }\\n    function acceptOwnership() public {\\n        require(msg.sender == newOwner);\\n        OwnershipTransferred(owner, newOwner);\\n        owner = newOwner;\\n        newOwner = address(0);\\n    }\\n}\\n\\n\\n// ----------------------------------------------------------------------------\\n// ERC20 Token, with the addition of symbol, name and decimals and assisted\\n// token transfers\\n// ----------------------------------------------------------------------------\\ncontract BananaToken is ERC20Interface, Owned, SafeMath {\\n    string public symbol;\\n    string public  name;\\n    uint8 public decimals;\\n    uint public _totalSupply;\\n\\n    mapping(address =&gt; uint) balances;\\n    mapping(address =&gt; mapping(address =&gt; uint)) allowed;\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Constructor\\n    // ------------------------------------------------------------------------\\n    function BananaToken() public {\\n        symbol = \\"BAN\\";\\n        name = \\"Banana Token\\";\\n        decimals = 18;\\n        _totalSupply = 100000000000000000000000000;\\n        balances[0xa8112ac2f02fa71f737929d18671b72e8609b78d] = _totalSupply;\\n        Transfer(address(0), 0xa8112ac2f02fa71f737929d18671b72e8609b78d, _totalSupply);\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Total supply\\n    // ------------------------------------------------------------------------\\n    function totalSupply() public constant returns (uint) {\\n        return _totalSupply  - balances[address(0)];\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Get the token balance for account tokenOwner\\n    // ------------------------------------------------------------------------\\n    function balanceOf(address tokenOwner) public constant returns (uint balance) {\\n        return balances[tokenOwner];\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Transfer the balance from token owner\'s account to to account\\n    // - Owner\'s account must have sufficient balance to transfer\\n    // - 0 value transfers are allowed\\n    // ------------------------------------------------------------------------\\n    function transfer(address to, uint tokens) public returns (bool success) {\\n        balances[msg.sender] = safeSub(balances[msg.sender], tokens);\\n        balances[to] = safeAdd(balances[to], tokens);\\n        Transfer(msg.sender, to, tokens);\\n        return true;\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Token owner can approve for spender to transferFrom(...) tokens\\n    // from the token owner\'s account\\n    //\\n    // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md\\n    // recommends that there are no checks for the approval double-spend attack\\n    // as this should be implemented in user interfaces\\n    // ------------------------------------------------------------------------\\n    function approve(address spender, uint tokens) public returns (bool success) {\\n        allowed[msg.sender][spender] = tokens;\\n        Approval(msg.sender, spender, tokens);\\n        return true;\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Transfer tokens from the from account to the to account\\n    //\\n    // The calling account must already have sufficient tokens approve(...)-d\\n    // for spending from the from account and\\n    // - From account must have sufficient balance to transfer\\n    // - Spender must have sufficient allowance to transfer\\n    // - 0 value transfers are allowed\\n    // ------------------------------------------------------------------------\\n    function transferFrom(address from, address to, uint tokens) public returns (bool success) {\\n        balances[from] = safeSub(balances[from], tokens);\\n        allowed[from][msg.sender] = safeSub(allowed[from][msg.sender], tokens);\\n        balances[to] = safeAdd(balances[to], tokens);\\n        Transfer(from, to, tokens);\\n        return true;\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Returns the amount of tokens approved by the owner that can be\\n    // transferred to the spender\'s account\\n    // ------------------------------------------------------------------------\\n    function allowance(address tokenOwner, address spender) public constant returns (uint remaining) {\\n        return allowed[tokenOwner][spender];\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Token owner can approve for spender to transferFrom(...) tokens\\n    // from the token owner\'s account. The spender contract function\\n    // receiveApproval(...) is then executed\\n    // ------------------------------------------------------------------------\\n    function approveAndCall(address spender, uint tokens, bytes data) public returns (bool success) {\\n        allowed[msg.sender][spender] = tokens;\\n        Approval(msg.sender, spender, tokens);\\n        ApproveAndCallFallBack(spender).receiveApproval(msg.sender, tokens, this, data);\\n        return true;\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Don\'t accept ETH\\n    // ------------------------------------------------------------------------\\n    function () public payable {\\n        revert();\\n    }\\n\\n\\n    // ------------------------------------------------------------------------\\n    // Owner can transfer out any accidentally sent ERC20 tokens\\n    // ------------------------------------------------------------------------\\n    function transferAnyERC20Token(address tokenAddress, uint tokens) public onlyOwner returns (bool success) {\\n        return ERC20Interface(tokenAddress).transfer(owner, tokens);\\n    }\\n}\\n\\n```\\n\\n\\nIf you find this useful, please share it with your crypto freaks in your network.\\nIf you don’t want to take the burden of doing all this, reach out to us at \\n**contact@unboxinnovations.com**\\n \\nOriginally published by me at :\\n [My Medium Blog](https://medium.com/@hargobindgupta/develop-your-erc-20-token-explained-f2437ef8329b)\\n"}',
                            authorId:
                                'a8112ac2f02fa71f737929d18671b72e8609b78d',
                            dateCreated: '2019-06-03T16:31:17.539Z',
                            datePublished: '2019-06-03T16:31:29.304Z',
                            status: 'PUBLISHED',
                            attributes: {
                                origin_name: 'medium',
                                origin_url:
                                    'https://medium.com/@hargobindgupta/develop-your-erc-20-token-explained-7d5972581874',
                            },
                            contentHash:
                                'QmY58jzJzoEYFrzVc3nTFCSoPRCWDynpQSQtuni2iTuabb',
                            checkpoint:
                                'QmPH8h4UWwHC1TAcEULJdjozq2GJ3Wv4DsiYRHo7CUFNSf',
                            tags: [
                                'erc20',
                                'ethereum',
                                'blockchain',
                                'decentralized',
                                'hargobind',
                                'dlt',
                                'token',
                            ],
                            voteResult: {
                                sum: 2.0,
                                count: 2,
                                hasVoted: null,
                                quantity: { '1': 2 },
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: 'a8112ac2f02fa71f737929d18671b72e8609b78d',
                                name: 'Hargobind Gupta',
                                username: 'hargobindgupta',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/QmeSkLdDSmb83PxgnDDjfmHoDPaSTwYJEu71gP32yPvGJA',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: 'a8112ac2f02fa71f737929d18671b72e8609b78d',
                                name: 'Hargobind Gupta',
                                username: 'hargobindgupta',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/QmeSkLdDSmb83PxgnDDjfmHoDPaSTwYJEu71gP32yPvGJA',
                                resourceIdentifier: {
                                    id:
                                        'a8112ac2f02fa71f737929d18671b72e8609b78d',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        'a8112ac2f02fa71f737929d18671b72e8609b78d',
                                    name: 'Hargobind Gupta',
                                    username: 'hargobindgupta',
                                    avatar:
                                        'https://api.kauri.io:443/ipfs/QmeSkLdDSmb83PxgnDDjfmHoDPaSTwYJEu71gP32yPvGJA',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [
                                    {
                                        author: {
                                            id:
                                                '3b1283d699a775829becd5625ed44859991ab32f',
                                            name: 'Raj Kumar Gupta',
                                            username: null,
                                            avatar: null,
                                            __typename: 'PublicUserDTO',
                                        },
                                        posted: '2019-06-04T06:10:48.077Z',
                                        body:
                                            'Thanks for the the explained tutorial.Waiting for more such content.',
                                        __typename: 'CommentDTO',
                                    },
                                    {
                                        author: {
                                            id:
                                                'a8112ac2f02fa71f737929d18671b72e8609b78d',
                                            name: 'Hargobind Gupta',
                                            username: 'hargobindgupta',
                                            avatar:
                                                'https://api.kauri.io:443/ipfs/QmeSkLdDSmb83PxgnDDjfmHoDPaSTwYJEu71gP32yPvGJA',
                                            __typename: 'PublicUserDTO',
                                        },
                                        posted: '2019-06-04T06:07:00.554Z',
                                        body:
                                            'Please comment if you are facing any issue while implementing.',
                                        __typename: 'CommentDTO',
                                    },
                                ],
                                totalPages: 1,
                                totalElements: 2,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                    ],
                    __typename: 'SectionDTO',
                },
                {
                    name: 'Ethereum SDKs',
                    description:
                        'Use Ethereum with your programming language of choice',
                    resources: [
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: '60a36c1b17d645939f63415218dc24f9',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 2,
                            },
                            description:
                                'Go Ethereum (or Geth) is the official Go implementation of the Ethereum protocol. The Go Ethereum GitHub repository holds source code for the Geth Ethereum client and other tools and libraries for developing DApps (decentralized applications). This guide walks through writing a riddle application in Go, using the Go Ethereum SDK and the Rinkeby testnet. You can find the sample code for this guide here. Why write DApps using Go? Writing a DApp typically involves two steps: Writing the contract co',
                            id: '60a36c1b17d645939f63415218dc24f9',
                            version: 2,
                            title: 'Creating a DApp in Go with Geth',
                            content:
                                '{"markdown":"Go Ethereum (or Geth) is the official Go implementation of the Ethereum protocol. The [Go Ethereum GitHub repository](https://github.com/ethereum/go-ethereum) holds source code for the Geth Ethereum client and other tools and libraries for developing DApps (decentralized applications).\\n\\nThis guide walks through writing a riddle application in Go, using the Go Ethereum SDK and the Rinkeby testnet. You can find the sample code for this guide [here](https://github.com/kauri-io/Content/tree/master/go-ethereum-guides/write-basic-quiz-dapp-in-go/quiz-dapp).\\n\\n## Why write DApps using Go?\\n\\nWriting a DApp typically involves two steps:\\n\\n1.  Writing the contract code in Solidity or a similar language.\\n2.  Writing the code that interacts with the deployed smart contract.\\n\\nThe Go Ethereum SDK allows us to write code for the second step in the Go programming language.\\n\\nThe code is written to interact with the smart contract usually performs tasks like serving up a user interface that allows the user to send calls and messages to a deployed contract. These are tasks where we don\'t need the resilience or distributed capacity of the blockchain or are too expensive (in terms of dollar and computational costs) to deploy to the Ethereum mainnet.\\n\\nGo allows us to write that application code with the same safety features that Solidity gives, plus other perks like:\\n\\n- An extensive library of tools to interact with the Ethereum network.\\n- Tools to transpile Solidity contract code to Go, allowing direct interaction with the contract ABI (Application Binary Interface) in a Go application.\\n- Allows us to write tests for contract code and application using Go\'s testing libraries and Go Ethereum\'s blockchain simulation library. Meaning unit tests that we can run without connecting to any Ethereum network, public or private.\\n\\n## Application structure\\n\\nIn this guide, we\'ll be writing a DApp that:\\n\\n1.  Publishes a question.\\n2.  Allows users to submit answers.\\n3.  Allows users to check if their answers are correct.\\n4.  If a user\'s answer is correct, record their address.\\n\\nTo do that, we need to:\\n\\n1.  Write a smart contract that stores a question, an answer, a list of users who answered the question correctly, and the methods to access them.\\n2.  Write a Go application that allows us to deploy a new contract and load an existing contract.\\n3.  Write a Go application that allows the user to:\\n    1.  Read the question.\\n    2.  Send an answer to the smart contract.\\n    3.  Check if the answer sent is correct.\\n    4.  If the answer sent is correct, record the user\'s account address.\\n\\n## Set up a development environment\\n\\nTo get started developing DApps with Go, first [install the Ethereum toolchain](https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum).\\n\\nNext create a folder to contain the project, for this guide, we assume that the project location is `/go/geth-dapp-demo`.\\n\\n## Manage Go dependencies\\n\\nWe use [Go modules](https://github.com/golang/go/wiki/Modules) to manage dependencies for this project. To get starting using Go modules for this project:\\n\\nOpen the terminal navigate to the project folder, and in the project folder, run:\\n\\n```\\ngo mod init github.com/<github-username>/geth-dapp-demo\\n```\\n\\nEdit the resulting `go.mod` file to look like the following, and save the file:\\n\\n```\\nmodule github.com/<username>/geth-dapp-demo\\n\\nrequire (\\n    github.com/ethereum/go-ethereum v1.8.20\\n    github.com/joho/godotenv v1.3.0\\n)\\n```\\n\\nWhen building an application, Go automatically fills the `go.mod` file with the other dependencies needed. We can let Go take care of those for now. With the `go.mod` file in place, Go makes sure that we use `v1.8.20` of the Go Ethereum SDK whenever we run the `go run` or `go build` command.\\n\\n### Set up Rinkeby testnet endpoint on Infura.io\\n\\nTo keep this guide straightforward, we use the Ethereum API gateways provided by [Infura.io](https://infura.io) instead of running our own Ethereum node. To run a Geth node for development instead, read this [Ethereum 101 guide](https://beta.kauri.io/article/67a81d8746ee4b49ba19447e8e2a983e/v2).\\n\\n1.  Go to [Infura.io](https://infura.io) and sign up for an account.\\n2.  Go to the Dashboard and click on **CREATE NEW PROJECT**.\\n3.  Enter a name for the project, and click **CREATE** to set up a new project.\\n\\nThe newly created project should look like this:\\n\\n![New project on Infura.io](https://api.beta.kauri.io:443/ipfs/QmSXXdatWZMkp63Hu4BYtgmNHTp75TD3Mm2BGxauFBhkYT)\\n\\nWe\'ll come back to this later when we\'ve deployed the smart contract.\\n\\nFor now, we need the URL of our project\'s Ethereum API gateway endpoint. Select \\"RINKEBY\\" from the **ENDPOINT** dropdown menu, and take note of the URL that appears underneath it. It should look like this:\\n\\n    https://rinkeby.infura.io/v3/<PROJECT_ID>\\n\\n**IMPORTANT!:** Make sure that the endpoint used in the Go code points to the Rinkeby testnet. If we use an endpoint pointing to the Ethereum mainnet, we spend real Ether to test the application.\\n\\nCreate a file in the project folder named `.env`. **Do not** commit this file to Git or any other version control system (VCS). Edit the `.env` file and enter the project\'s Ethereum API gateway endpoint:\\n\\n```\\nGATEWAY=\\"https://rinkeby.infura.io/v3/<PROJECT_ID>\\"\\n```\\n\\nSave the file. We\'ll use this into our Go application later.\\n\\n**NOTE:** Using a third-party provider to connect to the Ethereum network means that we\'re trusting it with all transactions and any Ether sent through it. If we don\'t use a third-party provider, we have to run and host our own Ethereum API gateway, or rely on users to connect to their own Ethereum nodes.\\n\\n### Set up an Ethereum account\\n\\nWe need an Ethereum account to deploy our smart contract. To create a new Ethereum account, run the command below and follow the on-screen instructions:\\n\\n```\\ngeth --datadir . account new\\n```\\n\\nThis command creates a `keystore` folder in the current directory. In it, is a keystore file for the new account that looks like `UTC--<timestamp>--<ethereum_address>`. **Do not** commit the keystore to VCS.\\n\\nWe need this keystore file and the passphrase for it to deploy a smart contract. Save the location of the keystore file and the passphrase in the `.env` file created earlier:\\n\\n```\\nGATEWAY=\\"...\\"\\nKEYSTORE=\\"$HOME/.ethereum/keystore/UTC--2018-12-30T12-29-11.490098600Z--<etherem_address>\\"\\nKEYSTOREPASS=\\"<keystore_passphrase>\\"\\n```\\n\\nTo deploy a contract and make contract calls; we need our account to contain Rinkeby testnet Ether. Get testnet Ether for the account by going to <https://faucet.rinkeby.io> and following the instructions there.\\n\\n## Writing and compiling the smart contract\\n\\nWe\'re all set and ready to go! First, we write the smart contract:\\n\\n1.  Create a new folder in the project directory and name it `quiz`.\\n2.  In it, create a file named `quiz.sol` and add the following code:\\n\\n```solidity\\npragma solidity >=0.5.2 <0.6.0;\\n\\ncontract Quiz {\\n    string public question;\\n    bytes32 internal _answer;\\n    mapping (address => bool) internal _leaderBoard;\\n\\n    constructor(string memory _qn, bytes32 _ans) public {\\n        question = _qn;\\n        _answer = _ans;\\n    }\\n\\n    function sendAnswer(bytes32 _ans) public returns (bool){\\n        return _updateLeaderBoard(_answer == _ans);\\n    }\\n\\n    function _updateLeaderBoard(bool ok) internal returns (bool){\\n        _leaderBoard[msg.sender] = ok;\\n        return true;\\n    }\\n\\n    function checkBoard() public view returns (bool){\\n        return _leaderBoard[msg.sender];\\n    }\\n}\\n```\\n\\nWe\'ll cover what our smart contract code does briefly, for more information about writing smart contracts in Solidity, read [this guide](https://beta.kauri.io/article/124b7db1d0cf4f47b414f8b13c9d66e2/v5).\\n\\nFirst, we set the data types that we want to store on the contract.\\n\\n`string public question`: Stores the question that we want to ask the user. Setting this as `public` has Solidity automatically generate a getter function for it when the contract compiles. This allows us to read this variable\'s contents with a `contractInstance.question()` method. Because getters don\'t invoke code execution on the EVM, they don\'t cost gas to run.\\n\\n`bytes32 internal _answer`: Stores the answer to our question. We\'ve set an `internal` modifier, which means that this variable can only be accessed from within this contract.\\n\\n`mapping (address=>bool) internal _leaderBoard`: Stores a hash map of user accounts and a boolean value that tells us whether a given account has answered the question correctly. We\'ve also set this state variable as `internal` to prevent external callers from modifying its contents.\\n\\nNext, the `constructor` is called when we deploy the contract where we give it a question `_qn` and an answer `_ans`.\\n\\nWe take `_qn` as a string because we mean for it to be easily readable by anyone interacting with the contract.\\n\\nOur answer `_ans` is set as a fixed slice of 32 bytes (`bytes32`) because we want to store it as a `keccak256` hash. Hashing the value of `_ans` obscures it, making it unreadable in the contract source or the transaction logs.\\n\\n`sendAnswer()` allows us to send an answer to the contract. The answer sent to the contract must be a 32-byte keccak256 hash, which we compare to the value of `_answer` stored on the contract. If the values match, we update our `leaderBoard` to show that the account that makes this function call has answered correctly.\\n\\n`_updateLeaderBoard()` takes a true/false value and sets the entry on the `_leaderBoard` mapping for our user\'s account to that value. It\'s an `internal` function, which prevents external callers from arbitrarily modifying the `_leaderBoard` mapping.\\n\\n`checkBoard()` checks if the contract recorded that the user answered correctly. The current user\'s Ethereum account is set by our `KEYSTORE` environment variable in [Set up an Ethereum account](#set-up-an-ethereum-account)\\n\\nNow that we\'ve got our Solidity contract fleshed out, we need to compile it to an ABI JSON specification and a contract binary. Then, we\'ll generate a Go binding file from those files, and import it into our Go DApp.\\n\\nWe\'ll use `solc` and `abigen` to do this. Run the following command to compile the contract:\\n\\n```\\nsolc --abi --bin quiz.sol -o build\\n```\\n\\nThis command creates a `build` folder that contains the files `Quiz.abi` and `Quiz.bin`.\\n\\nNext, generate the Go binding file. In the \\"quiz\\" directory, run:\\n\\n```\\nabigen --abi=\\"build/Quiz.abi\\" --bin=\\"build/Quiz.bin\\" --pkg=quiz --out=\\"quiz.go\\"\\n```\\n\\nThis command generates a Go file that contains bindings for the smart contract which we can import into our Go code.\\n\\n## The Go Code\\n\\n### Connect to Rinkeby network and get account balance\\n\\nWe\'ll start writing our Go DApp by initializing a connection to the Rinkeby network, using the Infura.io gateway endpoint that we [set up earlier](#set-up-rinkeby-testnet-endpoint-on-infuraio).\\n\\nIn the project root directory, create a new `main.go` file and add the following code:\\n\\n```\\npackage main\\n\\nimport (\\n    \\"context\\"\\n    \\"log\\"\\n    \\"fmt\\"\\n\\n    \\"github.com/ethereum/go-ethereum\\"\\n    \\"github.com/joho/godotenv\\"\\n)\\n\\nvar myenv map[string]string\\n\\nconst envLoc = \\".env\\"\\n\\nfunc loadEnv() {\\n    var err error\\n    if myenv, err = godotenv.Read(envLoc); err != nil {\\n        log.Printf(\\"could not load env from %s: %v\\", envLoc, err)\\n    }\\n}\\n\\nfunc main(){\\n    loadEnv()\\n\\n    ctx := context.Background()\\n\\n    client, err := ethclient.Dial(os.Getenv(\\"GATEWAY\\"))\\n    if err != nil {\\n        log.Fatalf(\\"could not connect to Ethereum gateway: %v\\\\n\\", err)\\n    }\\n    defer client.Close()\\n\\n    accountAddress := common.HexToAddress(\\"<enter_ethereum_address>\\")\\n    balance, _ := client.BalanceAt(ctx, accountAddress, nil)\\n    fmt.Printf(\\"Balance: %d\\\\n\\",balance)\\n}\\n```\\n\\nReplace `<enter_ethereum_address>` with the address of the Ethereum account from the [Set up an Ethereum account](#set-up-an-ethereum-account) step.\\n\\nHere, we:\\n\\nFirst load data from the `.env` file into a map `myenv` using the `godotenv` package, which we set as a dependency in our `go.mod` file.\\n\\nWe can then access values set in our `.env` file with `myenv[\\"KEYNAME\\"]`. For example, access the `GATEWAY` value with `myenv[\\"GATEWAY\\"]`.\\n\\nNotice that we\'ve also written a function `loadEnv()` that we can invoke at the beginning of every function scope. By placing a `loadEnv()` call at the start of every function that uses environment variables, we make sure that we catch any updates to our `.env` file while our application is running.\\n\\nNext we set up a connection to our Infura.io Rinkeby gateway by calling `ethclient.Dial(\\"<gateway_endpoint>\\")`. This works for both TCP (HTTP/S) and IPC (`<datadir>/geth.ipc`) endpoints. Then get the balance of our Ethereum account by calling `client.GetBalance(ctx, accountAddress, nil)` to convert our Ethereum address from a hex string like `48fddc985ecc605127f1a1c098c817778187637c` to the `common.Address` type before passing it to `GetBalance()` and print the result of `GetBalance()`.\\n\\nTest the application by running `go run main.go` in the terminal. If it prints the balance of the Ethereum account, the application has successfully loaded configuration from the `.env` file and sent a message call to the Rinkeby network.\\n\\nNow that we know that our `ethclient.Dial()` call works, we won\'t need the `GetBalance()` call. Remove it from `main()`, so that your main() block looks like this:\\n\\n```\\nfunc main(){\\n    loadEnv()\\n\\n    ctx := context.Background()\\n\\n    client, err := ethclient.Dial(os.Getenv(\\"GATEWAY\\"))\\n    if err != nil {\\n        log.Fatalf(\\"could not connect to Ethereum gateway: %v\\\\n\\", err)\\n    }\\n    defer client.Close()\\n\\n}\\n```\\n\\n### Create session\\n\\nSessions are wrappers that allow us to make contract calls without having to pass around authorization credentials and call parameters constantly. A session wraps:\\n\\n- a contract instance,\\n- a `bind.CallOpts` struct that contains options for making contract calls,\\n- a `bind.TransactOpts` struct that contains authorization credentials and parameters for creating a valid Ethereum transaction.\\n\\nCreating a session allows us to make calls on a contract instance like this:\\n\\n```\\nauth, _ := bind.NewTransactor(keystorefile, keystorepass)\\nsession.TransactOpts = auth\\n\\n// This calls the contract method sendAnswer(),\\n// which returns the question that we\'ve set\\n// for our deployed contract.\\nsession.SendAnswer(answer)\\nsession.Question()\\n```\\n\\nAs opposed to having to pass in a `bind.CallOpts` or `bind.TransactOpts` struct each time we make a contract call or a transaction:\\n\\n```\\nauth, _ := bind.NewTransactor(keystorefile, keystorepass)\\ncontractInstance.SendAnswer(&bind.TransactOpts{\\n        From: auth.From,\\n        Nonce: nil,           // nil uses nonce of pending state\\n        Signer: auth.Signer,\\n        Value: big.NewInt(0),\\n        GasPrice: nil,        // nil automatically suggests gas price\\n        GasLimit: 0,          // 0 automatically estimates gas limit\\n    },\\n    answer,\\n    )\\ncontractInstance.Question(&bind.CallOpts{\\n    Pending: true,\\n    From: auth.From,\\n    Context: context.Background(),\\n})\\ncontractInstance.CheckBoard(&bind.CallOpts{\\n    Pending: true,\\n    From: auth.From,\\n    Context: context.Background(),\\n})\\n```\\n\\nInstead, we do it once when we create a new session:\\n\\n```\\nauth, _ := bind.NewTransactor(keystorefile, keystorepass)\\nsession := quiz.QuizSession{\\n    Contract: contractInstance,\\n    CallOpts: bind.CallOpts{\\n        Pending: true,        // Acts on pending state if set to true\\n        From: auth.From,\\n        Context: context.Background(),\\n    },\\n    TransactOpts: bind.TransactOpts{\\n        From: auth.From,\\n        Nonce: nil,           // nil uses nonce of pending state\\n        Signer: auth.Signer,\\n        Value: big.NewInt(0),\\n        GasPrice: nil,        // nil automatically suggests gas price\\n        GasLimit: 0,          // 0 automatically estimates gas limit\\n    },\\n}\\n\\nsession.SendAnswer(answer)\\nsession.Question()\\nsession.CheckBoard()\\n```\\n\\n**NOTE:** `bind.NewTransactor()` returns a `bind.TransactOpts` struct with the `From` and `Signer` fields filled in with information from the keystore file, and the other fields filled in with safe defaults. We can use it as-is for transactions. For example `contractInstance.SendAnswer(auth, answer)` also works for our above example.\\n\\nLet\'s create a `NewSession()` function that creates a new usable session and returns it, add this to the bottom of your `main.go` file:\\n\\n```\\nfunc NewSession(ctx context.Context) (session quiz.QuizSession) {\\n    loadEnv()\\n    keystore, err := os.Open(myenv[\\"KEYSTORE\\"])\\n    if err != nil {\\n        log.Printf(\\n            \\"could not load keystore from location %s: %v\\\\n\\",\\n            myenv[\\"KEYSTORE\\"],\\n            err,\\n        )\\n    }\\n    defer keystore.Close()\\n\\n    keystorepass := myenv[\\"KEYSTOREPASS\\"]\\n    auth, err := bind.NewTransactor(keystore, keystorepass)\\n    if err != nil {\\n        log.Printf(\\"%s\\\\n\\", err)\\n    }\\n\\n    // Return session without contract instance\\n    return quiz.QuizSession{\\n        TransactOpts: *auth,\\n        CallOpts: bind.CallOpts{\\n            From:    auth.From,\\n            Context: ctx,\\n        },\\n    }\\n}\\n```\\n\\nHere, we:\\n\\n- Load our environment variables from `.env`.\\n- Read from our keystore file.\\n- Get our keystore passphrase from the environment variable `KEYSTOREPASS`.\\n- Create a new transactor with a `bind.NewTransactor()` call.\\n- Form and return a new `quiz.QuizSession` struct with our newly created transactor and a `CallOpts` struct with some defaults.\\n\\nWe can then create a new session in `main()`:\\n\\n```\\nfunc main(){\\n    // ...\\n    session := NewSession(context.Background())\\n}\\n```\\n\\nWe didn\'t specify a value for the `Contract` field in the session that we\'re returning from `NewSession()`. We\'ll do that on the returned `session` after we\'ve obtained a contract instance which we when we deploy a new contract on the blockchain or when we load an existing contract.\\n\\n### Deploy and load the contract\\n\\nNow that we\'ve created a new session, we need to assign it a contract instance.\\n\\nWe get a contract instance by deploying a contract or loading an existing contract from a contract address.\\n\\nWe\'ll write two functions to perform these tasks:\\n\\n```\\n// NewContract deploys a contract if no existing contract exists\\nfunc NewContract(session quiz.QuizSession, client *ethclient.Client, question string, answer string) (quiz.QuizSession) {\\n    loadEnv()\\n\\n    // Hash answer before sending it over Ethereum network.\\n    contractAddress, tx, instance, err := quiz.DeployQuiz(&session.TransactOpts, client, question, stringToKeccak256(answer))\\n    if err != nil {\\n        log.Fatalf(\\"could not deploy contract: %v\\\\n\\", err)\\n    }\\n    fmt.Printf(\\"Contract deployed! Wait for tx %s to be confirmed.\\\\n\\", tx.Hash().Hex())\\n\\n    session.Contract = instance\\n    updateEnvFile(\\"CONTRACTADDR\\", contractAddress.Hex())\\n    return session\\n}\\n\\n// LoadContract loads a contract if one exists\\nfunc LoadContract(session quiz.QuizSession, client *ethclient.Client) quiz.QuizSession {\\n    loadEnv()\\n\\n    addr := common.HexToAddress(myenv[\\"CONTRACTADDR\\"])\\n    instance, err := quiz.NewQuiz(addr, client)\\n    if err != nil {\\n        log.Fatalf(\\"could not load contract: %v\\\\n\\", err)\\n        log.Println(ErrTransactionWait)\\n    }\\n    session.Contract = instance\\n    return session\\n}\\n\\n// Utility functions\\n\\n// stringToKeccak256 converts a string to a keccak256 hash of type [32]byte\\nfunc stringToKeccak256(s string) [32]byte {\\n    var output [32]byte\\n    copy(output[:], crypto.Keccak256([]byte(s))[:])\\n    return output\\n}\\n\\n// updateEnvFile updates our env file with a key-value pair\\nfunc updateEnvFile(k string, val string) {\\n    myenv[k] = val\\n    err := godotenv.Write(myenv, envLoc)\\n    if err != nil {\\n        log.Printf(\\"failed to update %s: %v\\\\n\\", envLoc, err)\\n    }\\n}\\n```\\n\\nBoth `NewContract()` and `LoadContract()` create a contract instance, which we then assign to the `Contract` in the session with `session.Contract = instance`. We then return the session.\\n\\n#### Deploy a new contract\\n\\nOur `NewContract()` function takes as parameters:\\n\\n- `session quiz.QuizSession`: a session, which we initialized in [Create session](#create-session).\\n- `client *ethclient.Client`: the client object, which we initialized in `main()`.\\n- `question string`: a string containing the question we want the user to answer.\\n- `answer string`: the answer to the question, which we take as a string parameter.\\n\\nWe have to find a way to pass strings to our contract as the `question` and `answer` parameters, but we don\'t want to hardcode our answer or commit a file containing the answer to VCS. If we do, a user looking at the contract source or our DApp source code would be able to find the expected value for `answer` stored as plain text.\\n\\nWe also don\'t want to send the value of `answer` to the contract as plain text, because the contents of all transactions broadcasted to the network are logged as part of the transaction\'s payload. Any values sent as plain text would appear as-is when viewing the transaction\'s payload.\\n\\nSee an example of this at [`0x445d51fc29741b261f392936970b3c842e922dec841023ca40e248b9d3a2ba19`](https://rinkeby.etherscan.io/tx/0x445d51fc29741b261f392936970b3c842e922dec841023ca40e248b9d3a2ba19) on the Rinkeby network.\\n\\n![Answer stored as plain text](https://api.beta.kauri.io:443/ipfs/QmNZf2x1NDCWzSWvqus3dDeDmcUtp4U4GVpH6pKR9m8Z3z)\\n\\nTo get around this, we do two things:\\n\\nWe\'re already loading values from a `.env` file, so we can use that to store our `question` and `answer` values.\\n\\nAdd a `QUESTION` and an `ANSWER` key-value pair. Make the following changes to the `.env`:\\n\\n```\\nGATEWAY=\\"...\\"\\nKEYSTORE=\\"...\\"\\nKEYSTOREPASS=\\"...\\"\\nQUESTION=\\"this is a question\\"\\nANSWER=\\"this is the answer\\"\\n```\\n\\nAfter we\'ve done that, we can load the `question` and `answer` values in our code using `myenv[\\"QUESTION\\"]` and `myenv[\\"ANSWER\\"]` respectively.\\n\\nNext, encode the value of `answer` as a Keccak256 hash before sending it as part of the `session.DeployQuiz()` call. We can use the utility function `stringToKeccak256()` that converts a given string to keccak256 hash of type `[32]byte`.\\n\\nWe can now run `quiz.DeployQuiz()` and obtain a contract address `contractAddress`, a transaction object `tx`, and a contract instance `instance`. We assign the contract instance to `session.Contract` and return the now fully-formed session.\\n\\nWe also print the address of the transaction, which the user can look up on [Etherscan](https://rinkeby.etherscan.io) to check the progress of the transaction.\\n\\nFinally, we need to save the address of the deployed contract. We save it to our `.env` file by using the `godotenv.Write()` method. Here, we use another utility function `updateEnvFile()` to help us do this. `updateEnvFile()` does the following:\\n\\n1.  Adds a key `CONTRACTADDR` to our `myenv` map, and assigns the contract address hex to it.\\n2.  Calls `godotenv.Write(myenv, envLoc)` to write the updated `myenv` map to our `.env` file.\\n\\n#### Load an existing contract\\n\\nThe `LoadContract()` function also takes a `session` and `client` instance as parameters. Then, it attempts to load an existing contract by looking for a `CONTRACTADDR` entry in the `.env` file.\\n\\nIf a `CONTRACTADDR` doesn\'t exist in the `.env` file, we won\'t know where to locate our contract on the blockchain, so exit the function.\\n\\nOtherwise, call `quiz.NewQuiz()` to create a new contract instance and assign it to `session.Contract`.\\n\\n#### Deploy if the contract doesn\'t exist\\n\\nWe only want to call `NewContract()` if we don\'t already have an existing contract on the blockchain.\\n\\nTo do this, we write `if` statements to make sure that `NewContract()` is only called when `CONTRACTADDR` is not set in our `.env` file, and run `LoadContract()` only if we can find a non-empty `CONTRACTADDR` value:\\n\\n```\\nfunc main() {\\n    // ...\\n    // Load or Deploy contract, and update session with contract instance\\n    if myenv[\\"CONTRACTADDR\\"] == \\"\\" {\\n        session = NewContract(session, client, myenv[\\"QUESTION\\"], myenv[\\"ANSWER\\"])\\n    }\\n\\n    // If we have an existing contract, load it; if we\'ve deployed a new contract, attempt to load it.\\n    if myenv[\\"CONTRACTADDR\\"] != \\"\\" {\\n        session = LoadContract(session, client)\\n    }\\n}\\n```\\n\\n**NOTE:** Once we do this, the DApp attempts to load a contract from the value of `CONTRACTADDR` in the `.env` file as long as that value is not an empty string (`\\"\\"`). To force the DApp to deploy a new contract, remove the `CONTRACTADDR` entry in the `.env` file, or set it to an empty string (`\\"\\"`).\\n\\n### Interact with the contract\\n\\nNow that we have a contract instance to work with, we can use it to make contract calls.\\n\\nAny function or state variable marked as `public` in the `quiz.go` file generated with `abigen` is made available in `quiz.go` as methods we can call on a contract instance.\\n\\nFor example, because we have this line of code in `quiz.sol`:\\n\\n```\\nfunction sendAnswer(bytes32 _ans) public returns (bool)\\n```\\n\\nImporting `quiz.go` in our Go DApp allows us to call:\\n\\n```\\ncontractInstance.SendAnswer(&bind.CallOpts, answer)\\n```\\n\\nRemember that we want to do [the following things](#structure-of-our-application) with our Go DApp:\\n\\n- Read the question.\\n- Send an answer to the smart contract.\\n- Check if the answer sent is correct.\\n- If the answer sent is correct, record the user\'s account address.\\n\\nTo perform these tasks, we add the following functions to the bottom of the `main.go` file:\\n\\n```\\n//// Contract interaction\\n\\n// ErrTransactionWait should be returned/printed when we encounter an error that may be a result of the transaction not being confirmed yet.\\nconst ErrTransactionWait = \\"if you\'ve just started the application, wait a while for the network to confirm your transaction.\\"\\n\\n// readQuestion prints out question stored in contract.\\nfunc readQuestion(session quiz.QuizSession) {\\n    qn, err := session.Question()\\n    if err != nil {\\n        log.Printf(\\"could not read question from contract: %v\\\\n\\", err)\\n        log.Println(ErrTransactionWait)\\n        return\\n    }\\n    fmt.Printf(\\"Question: %s\\\\n\\", qn)\\n    return\\n}\\n\\n// sendAnswer sends answer to contract as a keccak256 hash.\\nfunc sendAnswer(session quiz.QuizSession, ans string) {\\n    // Send answer\\n    txSendAnswer, err := session.SendAnswer(stringToKeccak256(ans))\\n    if err != nil {\\n        log.Printf(\\"could not send answer to contract: %v\\\\n\\", err)\\n        return\\n    }\\n    fmt.Printf(\\"Answer sent! Please wait for tx %s to be confirmed.\\\\n\\", txSendAnswer.Hash().Hex())\\n    return\\n}\\n\\n// checkCorrect makes a contract message call to check if\\n// the current account owner has answered the question correctly.\\nfunc checkCorrect(session quiz.QuizSession) {\\n    win, err := session.CheckBoard()\\n    if err != nil {\\n        log.Printf(\\"could not check leaderboard: %v\\\\n\\", err)\\n        log.Println(ErrTransactionWait)\\n        return\\n    }\\n    fmt.Printf(\\"Were you correct?: %v\\\\n\\", win)\\n    return\\n}\\n```\\n\\nHere, we write three helper functions to wrap our contract calls:\\n\\n- `readQuestion(session quiz.QuizSession)` reads the question we stored on our deployed smart contract, and prints it out.\\n- `sendAnswer(session quiz.QuizSession, ans string)` takes an answer as a string, encodes it as a keccak256 hash, and sends it to the smart contract.\\n- `checkCorrect(session quiz.QuizSession)` checks if the current user is recorded on our smart contract as having sent a correct answer.\\n\\nNow, we can call these functions in `main()` to interact with a deployed smart contract.\\n\\n### Write a simple CLI\\n\\nNext, we\'ll write a bare-bones command-line interface (CLI) to allow our user to:\\n\\n1.  Read the question.\\n2.  Send an answer.\\n3.  Check if their answer was correct.\\n\\nTo implement this, add the following to the bottom of the `main()` block:\\n\\n```\\n// Loop to implement simple CLI\\nfor {\\n    fmt.Printf(\\n        \\"Pick an option:\\\\n\\" + \\"\\" +\\n            \\"1\\\\. Show question.\\\\n\\" +\\n            \\"2\\\\. Send answer.\\\\n\\" +\\n            \\"3\\\\. Check if you answered correctly.\\\\n\\" +\\n            \\"4\\\\. Exit.\\\\n\\",\\n    )\\n\\n    // Reads a single UTF-8 character (rune)\\n    // from STDIN and switches to case.\\n    switch readStringStdin() {\\n    case \'1\':\\n        readQuestion(session)\\n        break\\n    case \'2\':\\n        fmt.Println(\\"Type in your answer\\")\\n        sendAnswer(session, readStringStdin())\\n        break\\n    case \'3\':\\n        checkCorrect(session)\\n        break\\n    case \'4\':\\n        fmt.Println(\\"Bye!\\")\\n        return\\n    default:\\n        fmt.Println(\\"Invalid option. Please try again.\\")\\n        break\\n    }\\n}\\n```\\n\\nThen, add the following helper function to the bottom of the `main.go` file:\\n\\n```\\n// readStringStdin reads a string from STDIN and strips any trailing \\\\n characters from it.\\nfunc readStringStdin() string {\\n    reader := bufio.NewReader(os.Stdin)\\n    inputVal, err := reader.ReadString(\'\\\\n\')\\n    if err != nil {\\n        log.Printf(\\"invalid option: %v\\\\n\\", err)\\n        return \\"\\"\\n    }\\n\\n    output := strings.TrimSuffix(inputVal, \\"\\\\n\\") // Important!\\n    return output\\n}\\n```\\n\\nWhen we run the Go DApp with `go run main.go` in the terminal, `readStringStdin()` calls `bufio.NewReader(io.Stdin)`, which pauses the program and waits for the user to enter a value on the command line. It then takes that input, processes it, and returns it as a value that the Go application can use.\\n\\nWe implement the CLI using an infinite `for` loop that does the following:\\n\\n1.  Prints out quick instructions for using the CLI.\\n2.  Enters a `switch` statement that reads from user input on the command line, and executes a given `case` for the appropriate `rune` it receives.\\n3.  When the user selects an option, the code for that `case` runs and returns to the top of the `for` loop when `break` is called.\\n\\n## Running the application\\n\\nCongrats! We\'ve finished the quiz DApp!\\n\\nBefore testing the application, check that the `.env` file contains the values that the Go DApp needs to run. It should look something like this:\\n\\n```\\nGATEWAY=\\"https://rinkeby.infura.io/v3/<project_id>\\"\\nKEYSTORE=\\"/keystore/UTC--2019-01-14T13-58-48.439126200Z--<ethereum_address>\\"\\nKEYSTOREPASS=\\"\\"\\nQUESTION=\\"this is a question\\"\\nANSWER=\\"this is the answer\\"\\n```\\n\\nTo run the Go DApp, enter in the terminal:\\n\\n```\\ngo run main.go\\n```\\n\\nAlternatively, build and run the Go DApp by running:\\n\\n```\\ngo build main.go\\n./main\\n```\\n\\n## Limitations\\n\\nOur DApp is a simple example of what we can do with smart contracts and a Go DApp. Because we tried to keep the example straightforward, our DApp has a few limitations:\\n\\nOur DApp doesn\'t know if a transaction is completed or not. That\'s why we need separate functions to send an answer to the blockchain, and another to check if the answer was correct. We can implement this by having a process listen to any events on the blockchain at our contract address, but this is outside the scope of this guide.\\n\\nOur user can\'t just run the DApp, and it works. They need to specify a keystore file, and make sure that they have a deployed contract ready to interact with. We can correct this by adding to our CLI options that allow the user to enter values that configure these parameters.\\n\\nOur DApp assumes that the user who runs it is the same person who (1) deploys the contract, and (2) answers the question. Ideally, the DApp that deploys the contract and the DApp that interacts with the contract should be separate."}',
                            authorId:
                                'd4d6b59fa1fb4d313d21a5fb7b55d18e7b38a5c5',
                            dateCreated: '2019-02-03T10:32:39.542Z',
                            datePublished: '2019-02-03T10:32:43.572Z',
                            status: 'PUBLISHED',
                            attributes: {
                                background:
                                    'https://api.beta.kauri.io:443/ipfs/QmfCaFUvx94wo9BD1HvntsbxbiaLcDZCSHJpQt3dT7GCoU',
                            },
                            contentHash:
                                'QmNwRw3MevQE5zb8fPYiDgg4y2nSfUbkDmW4X8sGZQKxv8',
                            checkpoint:
                                'QmbC5NWuGroaxeSnVnt7dqzDbaxNP5BH8Dwy1w1BAYFtwV',
                            tags: [
                                'Golang',
                                'Go-programming-language',
                                'DApp',
                                'Geth',
                            ],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: 'd4d6b59fa1fb4d313d21a5fb7b55d18e7b38a5c5',
                                name: 'Zed',
                                username: null,
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmWo79uUzQJqeGjg8XRi1NWJoPUJiy789ckddRduQcJvRY',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: 'd4d6b59fa1fb4d313d21a5fb7b55d18e7b38a5c5',
                                name: 'Zed',
                                username: null,
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/QmWo79uUzQJqeGjg8XRi1NWJoPUJiy789ckddRduQcJvRY',
                                resourceIdentifier: {
                                    id:
                                        'd4d6b59fa1fb4d313d21a5fb7b55d18e7b38a5c5',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        'd4d6b59fa1fb4d313d21a5fb7b55d18e7b38a5c5',
                                    name: 'Zed',
                                    username: null,
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/QmWo79uUzQJqeGjg8XRi1NWJoPUJiy789ckddRduQcJvRY',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [
                                    {
                                        author: {
                                            id:
                                                'd4d6b59fa1fb4d313d21a5fb7b55d18e7b38a5c5',
                                            name: 'Zed',
                                            username: null,
                                            avatar:
                                                'https://api.beta.kauri.io:443/ipfs/QmWo79uUzQJqeGjg8XRi1NWJoPUJiy789ckddRduQcJvRY',
                                            __typename: 'PublicUserDTO',
                                        },
                                        posted: '2019-07-18T12:59:02.075Z',
                                        body:
                                            '[edit] *Other issues could be caused by an issue with the version of Solc [...]',
                                        __typename: 'CommentDTO',
                                    },
                                    {
                                        author: {
                                            id:
                                                'd4d6b59fa1fb4d313d21a5fb7b55d18e7b38a5c5',
                                            name: 'Zed',
                                            username: null,
                                            avatar:
                                                'https://api.beta.kauri.io:443/ipfs/QmWo79uUzQJqeGjg8XRi1NWJoPUJiy789ckddRduQcJvRY',
                                            __typename: 'PublicUserDTO',
                                        },
                                        posted: '2019-07-18T12:57:38.138Z',
                                        body:
                                            'Discussed issue above privately: the code should work as is. \n\n"Out of gas" issues can be resolved by manually tweaking the `bind.TransactOpts` that you pass into your session. The guide uses the defaults as prescribed by the Ethereum documentation, but may not work because they depend on the gas costs on the Ethereum network to remain fairly stable.\n\nCould be an issue with the version of Solc used, or the Geth node config. Most fuss-free way of completing the tutorial is (1) using go modules to lock in dependencies, (2) using Infura.io as your Geth gateway, so we avoid Geth node config issues for now.\n\n',
                                        __typename: 'CommentDTO',
                                    },
                                    {
                                        author: {
                                            id:
                                                '8015599c1b2fd65d8411865bb80d4d52bf12b516',
                                            name: null,
                                            username: null,
                                            avatar: null,
                                            __typename: 'PublicUserDTO',
                                        },
                                        posted: '2019-07-12T13:42:44.177Z',
                                        body:
                                            'Hi there,\n\nTried to deploy smart contract using go native binding. The deployment is successful and the transaction status shows in block chain as 0x1. However, while accessing the storage, the value set through constructor was not getting displayed. Also, the transaction to set the storage throws error (in go program) and fails( 0x0 status in geth console)\n\n#### System information\n\nGeth version: 1.8.12-stable ( Quorum)\nOS & Version: Linux/ubuntu\nCommit hash : NA\n\n#### Expected behaviour\n1. Transaction for setting storage value should success\n2. As the smart contract deployment is successful (txn status shows as 0x1), the value set in constructor should be fetched successfully from geth console as well as from go program.\n\n#### Actual behaviour\n1. Transactions fails from go program with error - "2019/07/12 10:11:54 could not send answer to contract: failed to estimate gas needed: gas required exceeds allowance or always failing transaction"\n2. While fetching value of storage from go program, it shows  " could not read question from contract: abi: unmarshalling empty output".\nIf I do same from geth console with my deployment address, it shows empty value - 0x0\n\n#### Steps to reproduce the behaviour\n1. Generate the go binding for below smart contract -  \n\ncontract Quiz {\n    string public question;\n    bytes32 public answer;\n    mapping (address => bool) public leaderBoard;\n\n    constructor(string memory _qn, bytes32 _ans) public {\n        question = _qn;\n        answer = _ans;\n    }\n\n    function sendAnswer(bytes32 _ans) public returns (bool){\n        return updateLeaderBoard(answer == _ans);\n    }\n\n    function updateLeaderBoard(bool ok) public returns (bool){\n        leaderBoard[msg.sender] = ok;\n        return true;\n    }\n\n    function checkBoard() public view returns (bool){\n        return leaderBoard[msg.sender];\n    }\n}\n\n2.  Go program used to access the smart contract \n\npackage main\n\nimport (\n   "geth-dapp-demo/quiz"\n    "context"\n    "log"\n    "fmt"\n    "os"\n    "strings"\n    "bufio"\n    //"errors"\n    //"crypto/Keccak256"\n    "github.com/ethereum/go-ethereum/crypto"\n    "github.com/ethereum/go-ethereum/common"\n    "github.com/ethereum/go-ethereum/ethclient"\n    "github.com/joho/godotenv"\n    "github.com/ethereum/go-ethereum/accounts/abi/bind"\n)\nvar myenv map[string]string\n\nconst envLoc = ".env"\n// ErrTransactionWait should be returned/printed when we encounter an error that may be a result of the transaction not being confirmed yet.\nconst ErrTransactionWait = "if you\'ve just started the application, wait a while for the network to confirm your transaction."\n\n\nfunc loadEnv() {\n    var err error\n    if myenv, err = godotenv.Read(envLoc); err != nil {\n        log.Printf("could not load env from %s: %v", envLoc, err)\n    }\n}\n\nfunc main(){\n    loadEnv()\n\n    ctx := context.Background()\n\n  //   client, err := ethclient.Dial(os.Getenv("GATEWAY"))\n    client, err := ethclient.Dial("/home/ubuntu/test/quorum-examples/examples/7nodes/qdata/dd1/geth.ipc")\n    if err != nil {\n        log.Fatalf("could not connect to Ethereum gateway: %v\\n", err)\n    }\n    defer client.Close()\n\n    //accountAddress := common.HexToAddress("0xF6cc1cba1BE28d9fEB2be11534ECf7FEE8bFE1CE")\n    //balance, _ := client.BalanceAt(ctx, accountAddress, nil)\n    //fmt.Printf("Balance: %d\\n",balance)\n\n   session := NewSession(ctx)\n\n\n\n// Load or Deploy contract, and update session with contract instance\n    if myenv["CONTRACTADDR"] == "" {\n        session = NewContract(session, client, "name", "satya")\n    }\n\n    // If we have an existing contract, load it; if we\'ve deployed a new contract, attempt to load it.\n    if myenv["CONTRACTADDR"] != "" {\n        session = LoadContract(session, client)\n    }\n\n\n\n// Loop to implement simple CLI\n    for {\n       fmt.Printf(\n        "Pick an option:\\n" + "" +\n            "1. Show question.\\n" +\n            "2. Send answer.\\n" +\n            "3. Check if you answered correctly.\\n" +\n            "4. Exit.\\n",\n    )\n\n    // Reads a single UTF-8 character (rune)\n    // from STDIN and switches to case.\n    runes := []rune(readStringStdin())\n    switch runes[0] {\n    case \'1\':\n        readQuestion(session)\n        break\n    case \'2\':\n        fmt.Println("Type in your answer")\n        sendAnswer(session, readStringStdin())\n        break\n    case \'3\':\n        checkCorrect(session)\n        break\n    case \'4\':\n        fmt.Println("Bye!")\n        return\n    default:\n        fmt.Println("Invalid option. Please try again.")\n        break\n    }\n}\n\n}\n\nfunc NewSession(ctx context.Context) (session quiz.QuizSession) {\n    loadEnv()\n    keystore, err := os.Open(myenv["KEYSTORE"])\n    if err != nil {\n        log.Printf(\n            "could not load keystore from location %s: %v\\n",\n            myenv["KEYSTORE"],\n            err,\n        )\n    }\n    defer keystore.Close()\n\n    keystorepass := myenv["KEYSTOREPASS"]\n    auth, err := bind.NewTransactor(keystore, keystorepass)\n    if err != nil {\n        log.Printf("%s\\n", err)\n    }\n\n    // Return session without contract instance\n    return quiz.QuizSession{\n        TransactOpts: *auth,\n        CallOpts: bind.CallOpts{\n            From:    auth.From,\n            Context: ctx,\n        },\n    }\n}\n\n// NewContract deploys a contract if no existing contract exists\nfunc NewContract(session quiz.QuizSession, client *ethclient.Client, question string, answer string) (quiz.QuizSession) {\n    loadEnv()\n\n    // Hash answer before sending it over Ethereum network.\n    contractAddress, tx, instance, err := quiz.DeployQuiz(&session.TransactOpts, client, question, stringToKeccak256(answer))\n    if err != nil {\n        log.Fatalf("could not deploy contract: %v\\n", err)\n    }\n    fmt.Printf("Contract deployed! Wait for tx %s to be confirmed.\\n", tx.Hash().Hex())\n\n    session.Contract = instance\n    updateEnvFile("CONTRACTADDR", contractAddress.Hex())\n    return session\n}\n\n// LoadContract loads a contract if one exists\nfunc LoadContract(session quiz.QuizSession, client *ethclient.Client) quiz.QuizSession {\n    loadEnv()\n\n    addr := common.HexToAddress(myenv["CONTRACTADDR"])\n    instance, err := quiz.NewQuiz(addr, client)\n    if err != nil {\n        log.Fatalf("could not load contract: %v\\n", err)\n       log.Println(ErrTransactionWait)\n    }\n    session.Contract = instance\n    return session\n}\n\n// Utility functions\n\n// stringToKeccak256 converts a string to a keccak256 hash of type [32]byte\nfunc stringToKeccak256(s string) [32]byte {\n    var output [32]byte\n    copy(output[:], crypto.Keccak256([]byte(s))[:])\n    return output\n}\n\n// updateEnvFile updates our env file with a key-value pair\nfunc updateEnvFile(k string, val string) {\n    myenv[k] = val\n    err := godotenv.Write(myenv, envLoc)\n    if err != nil {\n        log.Printf("failed to update %s: %v\\n", envLoc, err)\n    }\n}\n\n\n// readQuestion prints out question stored in contract.\nfunc readQuestion(session quiz.QuizSession) {\n    qn, err := session.Question()\n    if err != nil {\n        log.Printf("could not read question from contract: %v\\n", err)\n        log.Println(ErrTransactionWait)\n        return\n    }\n    fmt.Printf("Question: %s\\n", qn)\n    return\n}\n\n// sendAnswer sends answer to contract as a keccak256 hash.\nfunc sendAnswer(session quiz.QuizSession, ans string) {\n    // Send answer\n    txSendAnswer, err := session.SendAnswer(stringToKeccak256(ans))\n    if err != nil {\n        log.Printf("could not send answer to contract: %v\\n", err)\n        return\n    }\n    fmt.Printf("Answer sent! Please wait for tx %s to be confirmed.\\n", txSendAnswer.Hash().Hex())\n    return\n}\n\n// checkCorrect makes a contract message call to check if\n// the current account owner has answered the question correctly.\nfunc checkCorrect(session quiz.QuizSession) {\n    win, err := session.CheckBoard()\n    if err != nil {\n        log.Printf("could not check leaderboard: %v\\n", err)\n        log.Println(ErrTransactionWait)\n        return\n    }\n    fmt.Printf("Were you correct?: %v\\n", win)\n    return\n}\n\n// readStringStdin reads a string from STDIN and strips any trailing \\n characters from it.\nfunc readStringStdin() string {\n    reader := bufio.NewReader(os.Stdin)\n    inputVal, err := reader.ReadString(\'\\n\')\n    if err != nil {\n        log.Printf("invalid option: %v\\n", err)\n        return ""\n    }\n\n    output := strings.TrimSuffix(inputVal, "\\n") // Important!\n    return output\n}\n\n3. Smart contract Deployment shows success message:\n\n4. However, the value is not set properly\n\n\n\n',
                                        __typename: 'CommentDTO',
                                    },
                                ],
                                totalPages: 1,
                                totalElements: 3,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'b54334b0695342c1bbe161c4c4467b50',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 1,
                            },
                            description:
                                'The purpose of this article is to help .NET developers leverage Nethereum, An open source .NET integration library for blockchain. You can execute this tutorial as a workbook, or download a simplified sample here The purpose of this sample is the following: Understanding how to create contract deployment, function and event definitions to interact with a smart contracts Creating an account object using a private key, this will allow to sign transactions offline. Deploying a smart contract (the s',
                            id: 'b54334b0695342c1bbe161c4c4467b50',
                            version: 1,
                            title: 'Smart contracts integration with Nethereum',
                            content:
                                '{"markdown":"The purpose of this article is to help .NET developers leverage  [Nethereum](https://nethereum.com/), An open source .NET integration library for blockchain.\\n\\n> You can execute this tutorial as a [workbook](https://nethereum.readthedocs.io/en/latest/Nethereum.Workbooks/docs/nethereum-smartcontrats-gettingstarted.workbook), or download a simplified sample [here](https://github.com/Nethereum/Nethereum.CQS.SimpleTokenTransfer)\\n\\nThe purpose of this sample is the following:\\n\\n* Understanding how to create contract deployment, function and event definitions to interact with a smart contracts\\n\\n* Creating an account object using a private key, this will allow to sign transactions \\"offline\\".\\n\\n* Deploying a smart contract (the sample provided is the standard ERC20 token contract)\\n\\n* Making a call to a smart contract (in this scenario get the balance of an account)\\n\\n* Sending a transaction to the smart contract (in this scenario transferring balance)\\n\\n* Estimating the gas cost of a contract transaction\\n\\n* Gas Price, Nonces and Sending Ether to smart contracts\\n\\n* Signing online / offline transaction function messages and deployment messages\\n\\n* Extension methods for Deployment and Function messages\\n\\n* Retrieving the state of a smart contract from a previous block\\n\\n### Pre-Conditions\\n\\nIn this tutorial we are going to interact with the ERC20 standard token contract. The smart contract provides a standard way to create a new token, transfer it to another account and query the balance of any account. This standard interface allows the interoperability of smart contracts providing the same signature and applications that integrate with it.\\n\\n![Constructor, transfer, balance and event of ERC20](https://github.com/Nethereum/Nethereum.Workbooks/raw/master/docs/screenshots/simpleERC20.png)\\n\\nA full sample of the smart contract can be found [here](https://nethereum.readthedocs.io/en/latest/Nethereum.Workbooks/docs/StandardToken.sol)\\n\\nFirst of all, we need to declare our namespaces, and contract definition to interact with the smart contract. In this scenario we are only interested in the Deployment, Transfer function and BalanceOf Function of the ERC20 smart contract.\\n\\nAdd a reference to the nuget package \\"Nethereum.Web3\\"\\n\\n```csharp\\n#r \\"Nethereum.Web3\\"\\n```\\n\\n```csharp\\n#r \\"Nethereum.Accounts\\"\\n```\\n\\n```csharp\\nusing Nethereum.Web3;\\nusing Nethereum.ABI.FunctionEncoding.Attributes;\\nusing Nethereum.Contracts.CQS;\\nusing Nethereum.Util;\\nusing Nethereum.Web3.Accounts;\\nusing Nethereum.Hex.HexConvertors.Extensions;\\nusing Nethereum.Contracts;\\nusing Nethereum.Contracts.Extensions;\\nusing System.Numerics;\\n```\\n\\nTo deploy a contract we will create a class inheriting from the ContractDeploymentMessage, here we can include our compiled byte code and other constructor parameters.\\n\\nAs we can see below the StandardToken deployment message includes the compiled bytecode of the ERC20 smart contract and the constructor parameter with the “totalSupply” of tokens.\\n\\nEach parameter is described with an attribute Parameter, including its name \\"totalSupply\\", type \\"uint256\\" and order.\\n\\n```csharp\\npublic class StandardTokenDeployment : ContractDeploymentMessage\\n{\\n\\n            public static string BYTECODE = \\"0x60606040526040516020806106f5833981016040528080519060200190919050505b80600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005081905550806000600050819055505b506106868061006f6000396000f360606040523615610074576000357c010000000000000000000000000000000000000000000000000000000090048063095ea7b31461008157806318160ddd146100b657806323b872dd146100d957806370a0823114610117578063a9059cbb14610143578063dd62ed3e1461017857610074565b61007f5b610002565b565b005b6100a060048080359060200190919080359060200190919050506101ad565b6040518082815260200191505060405180910390f35b6100c36004805050610674565b6040518082815260200191505060405180910390f35b6101016004808035906020019091908035906020019091908035906020019091905050610281565b6040518082815260200191505060405180910390f35b61012d600480803590602001909190505061048d565b6040518082815260200191505060405180910390f35b61016260048080359060200190919080359060200190919050506104cb565b6040518082815260200191505060405180910390f35b610197600480803590602001909190803590602001909190505061060b565b6040518082815260200191505060405180910390f35b600081600260005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008573ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905061027b565b92915050565b600081600160005060008673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050541015801561031b575081600260005060008673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505410155b80156103275750600082115b1561047c5781600160005060008573ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a381600160005060008673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054039250508190555081600260005060008673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060003373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505403925050819055506001905061048656610485565b60009050610486565b5b9392505050565b6000600160005060008373ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000505490506104c6565b919050565b600081600160005060003373ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600050541015801561050c5750600082115b156105fb5781600160005060003373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282825054039250508190555081600160005060008573ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828282505401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905061060556610604565b60009050610605565b5b92915050565b6000600260005060008473ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005060008373ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060005054905061066e565b92915050565b60006000600050549050610683565b9056\\";\\n\\n    public StandardTokenDeployment() : base(BYTECODE){}\\n\\n    [Parameter(\\"uint256\\", \\"totalSupply\\")]\\n    public BigInteger TotalSupply { get; set; }\\n}\\n```\\n\\nWe can call the functions of smart contract to query the state of a smart contract or do any computation, which will not affect the state of the blockchain.\\n\\nTo do so we will need to create a class which inherits from \\"FunctionMessage\\". First we will decorate the class with a \\"Function\\" attribute, including the name and return type.\\n\\nEach parameter of the the function will be a property of the class, each of them decorated with the \\"Parameter\\" attribute, including the smart contract name, type and parameter order.\\n\\nFor the ERC20 smart contract, the \\"balanceOf\\" function definition, provides the query interface to get the token balance of a given address. As we can see this function includes only one parameter \\"\\\\_owner\\", of the type \\"address\\".\\n\\n```csharp\\n[Function(\\"balanceOf\\", \\"uint256\\")]\\npublic class BalanceOfFunction : FunctionMessage\\n{\\n    [Parameter(\\"address\\", \\"_owner\\", 1)]\\n    public string Owner { get; set; }\\n}\\n```\\n\\nAnother type of smart contract function will be correspondent to a transaction that will change the state of the smart contract (or smart contracts).\\n\\nFor example The \\"transfer\\" function definition for the ERC20 smart contract, includes the parameters “\\\\_to” address parameter as a string, and the “\\\\_value” or TokenAmount we want to transfer.\\n\\nIn a similar way to the \\"balanceOf\\" function, all the parameters include the solidity type, parameter name and parameter order.\\n\\nNote: When working with functions, it is very important to have the parameters types, and function name correct as all of these make the signature of the function.\\n\\n```csharp\\n[Function(\\"transfer\\", \\"bool\\")]\\npublic class TransferFunction : FunctionMessage\\n{\\n    [Parameter(\\"address\\", \\"_to\\", 1)]\\n    public string To { get; set; }\\n\\n    [Parameter(\\"uint256\\", \\"_value\\", 2)]\\n    public BigInteger TokenAmount { get; set; }\\n}\\n```\\n\\nFinally smart contracts also have events. Events in smart contracts write the blockchain log, providing a way to retrieve further information of any smart contract interaction occurred.\\n\\nTo create an Event definition, we need to create a class that inherits from IEventDTO, decorated with the Event attribute.\\n\\nThe Transfer Event, similar to the Function it also includes the parameters with the name, order and type. But also a boolean value indicating if the parameter is indexed or not.\\n\\nIndexed parameters will allow us later on to query the blockchain for those values.\\n\\n```csharp\\n[Event(\\"Transfer\\")]\\npublic class TransferEventDTO : IEventDTO\\n{\\n    [Parameter(\\"address\\", \\"_from\\", 1, true)]\\n    public string From { get; set; }\\n\\n    [Parameter(\\"address\\", \\"_to\\", 2, true)]\\n    public string To { get; set; }\\n\\n    [Parameter(\\"uint256\\", \\"_value\\", 3, false)]\\n    public BigInteger Value { get; set; }\\n}\\n```\\n\\n### Instantiating Web3 and the Account\\n\\nA simple way to run this sample is to use one of the pre-configured private chains which can be found https://github.com/Nethereum/TestChains (Geth, Parity, Ganache) using the Account “0x12890d2cce102216644c59daE5baed380d84830c” with private key “0xb5b1870957d373ef0eeffecc6e4812c0fd08f554b37b233526acc331bf1544f7“, or alternatively use your own testchain with your own account / private key.\\n\\nTo create an instance of web3 we first provide the url of our testchain and the private key of our account. When providing an Account instantiated with a  private key all our transactions will be signed by Nethereum.\\n\\n```csharp\\nvar url = \\"http://localhost:8545\\";\\nvar privateKey = \\"0xb5b1870957d373ef0eeffecc6e4812c0fd08f554b37b233526acc331bf1544f7\\";\\nvar account = new Account(privateKey);\\nvar web3 = new Web3(account, url);\\n```\\n\\n### Deploying the Contract\\n\\nThe next step is to deploy our Standard Token ERC20 smart contract, in this scenario the total supply (number of tokens) is going to be 100,000.\\n\\nFirst we create an instance of the StandardTokenDeployment with the TotalSupply amount.\\n\\n```csharp\\nvar deploymentMessage = new StandardTokenDeployment\\n{\\n    TotalSupply = 100000\\n};\\n```\\n\\nThen we create a deployment handler using our contract deployment definition and simply deploy the contract using the deployment message. We are auto estimating the gas, getting the latest gas price and nonce so nothing else is set anything on the deployment message.\\n\\nFinally, we wait for the deployment transaction to be mined, and retrieve the contract address of the new contract from the receipt.\\n\\n```csharp\\nvar deploymentHandler = web3.Eth.GetContractDeploymentHandler<StandardTokenDeployment>();\\nvar transactionReceipt = await deploymentHandler.SendRequestAndWaitForReceiptAsync(deploymentMessage);\\nvar contractAddress = transactionReceipt.ContractAddress;\\n```\\n\\n### Interacting with the Contract\\n\\nOnce we have deployed the contract, we can start interaction with the contract.\\n\\n#### Querying\\n\\nTo retrieve the balance of an address we can create an instance of the BalanceFunction message and set the parameter as our account \\"Address\\", because we are the \\"owner\\" of the Token the full balance has been assigned to us.\\n\\n```csharp\\nvar balanceOfFunctionMessage = new BalanceOfFunction()\\n{\\n    Owner = account.Address,\\n};\\n\\nvar balanceHandler = web3.Eth.GetContractQueryHandler<BalanceOfFunction>();\\nvar balance = await balanceHandler.QueryAsync<BigInteger>(contractAddress, balanceOfFunctionMessage);\\n```\\n\\nTo retrieve the balance, we will create a QueryHandler and finally using our contract address and message retrieve the balance amount.\\n\\n##### Multiple return types or complex objects\\n\\nFunctions of smart contracts can return one or multiple values in a single call. To decode the return values, we use a FunctionOutputDTO.\\n\\nFunction outputs are classes which are decorated with a FunctionOutput attribute and implement the interface IFunctionOutputDTO.\\n\\nAn example of this is the following implementation that can be used to return the single value of the Balance on the ERC20 smart contract.\\n\\n```csharp\\n [FunctionOutput]\\n public class BalanceOfOutputDTO : IFunctionOutputDTO\\n {\\n      [Parameter(\\"uint256\\", \\"balance\\", 1)]\\n      public BigInteger Balance { get; set; }\\n }\\n```\\n\\nIf we were going to return multiple values we could have something like:\\n\\n```csharp\\n [FunctionOutput]\\n public class BalanceOfOutputMultipleDTO : IFunctionOutputDTO\\n {\\n      [Parameter(\\"uint256\\", \\"balance1\\", 1)]\\n      public BigInteger Balance1 { get; set; }\\n\\n      [Parameter(\\"uint256\\", \\"balance2\\", 2)]\\n      public BigInteger Balance2 { get; set; }\\n\\n      [Parameter(\\"uint256\\", \\"balance1\\", 3)]\\n      public BigInteger Balance3 { get; set; }\\n }\\n```\\n\\nWhen querying the chain we will use the following method instead:\\n\\n```csharp\\nvar balance = await balanceHandler.QueryDeserializingToObjectAsync<BalanceOfOutputDTO>( balanceOfFunctionMessage, contractAddress);\\n```\\n\\n#### Querying previous state of the smart contract\\n\\nAnother great feature of the Ethereum blockchain is the capability to retrieve the state of a smart contract from a previous block.\\n\\nFor example, we could get the balance of the owner at the time of deployment by using the block number, in which the contract was deployed.\\n\\n```csharp\\nvar balance = await balanceHandler.QueryDeserializingToObjectAsync<BalanceOfOutputDTO>( balanceOfFunctionMessage, contractAddress, new Nethereum.RPC.Eth.DTOs.BlockParameter(transactionReceipt.BlockNumber));\\n```\\n\\n#### Transfer\\n\\nMaking a transfer will change, the state of the blockchain, so in this scenario we will need to create a TransactionHandler using the TransferFunction definition.\\n\\nIn the transfer message, we will include the receiver address \\"To\\", and the \\"TokenAmount\\" to transfer.\\n\\nThe final step is to Send the request wait for the receipt to be “mined” and included in the blockchain.\\n\\nAnother option will be not to wait (poll) for the transaction to mined and just retrieve the transaction hash.\\n\\n```csharp\\nvar receiverAddress = \\"0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe\\";\\nvar transferHandler = web3.Eth.GetContractTransactionHandler<TransferFunction>();\\nvar transfer = new TransferFunction()\\n{\\n    To = receiverAddress,\\n    TokenAmount = 100\\n};\\nvar transactionReceipt = await transferHandler.SendRequestAndWaitForReceiptAsync(contractAddress, transfer);\\n```\\n\\n##### Transferring Ether to a smart contract\\n\\nA function or deployment transaction can send Ether to the smart contract. The FunctionMessage and DeploymentMessage have the property \\"AmountToSend\\".\\n\\nSo if the \\"transfer\\" function accepts also Ether, we will set it this way.\\n\\n```csharp\\ntransfer.AmountToSend = Nethereum.Web3.Web3.Convert.ToWei(1);\\n```\\n\\nThe GasPrice is set in \\"Wei\\" which is the lowest unit in Ethereum, so in the scenario above we have converted 1 Ether to Wei.\\n\\n##### Gas Price\\n\\nNethereum sets automatically the GasPrice if not provided by using the clients \\"GasPrice\\" call, which provides the average gas price from previous blocks.\\n\\nIf you want to have more control of the GasPrice these can be set in both FunctionMessages and DeploymentMessages.\\n\\n```csharp\\n  transfer.GasPrice =  Nethereum.Web3.Web3.Convert.ToWei(25, UnitConversion.EthUnit.Gwei);\\n```\\n\\nThe GasPrice is set in \\"Wei\\" which is the lowest unit in Ethereum, so if we are used to the usual \\"Gwei\\" units, this will need to be converted using the Nethereum Convertion utilities.\\n\\n##### Estimating Gas\\n\\nNethereum does an automatic estimation of the total gas necessary to make the function transaction by calling the \\"EthEstimateGas\\" internally with the \\"CallInput\\".\\n\\nIf wanted this can be done manually, using the TransactionHandler and the \\"transfer\\" transaction FucntionMessage.\\n\\n```csharp\\n var estimate = await transferHandler.EstimateGasAsync(contractAddress, transfer);\\n transfer.Gas = estimate.Value;\\n```\\n\\n##### Nonces\\n\\nEach account transaction has a Nonce associated with it, this is the order and unique number for that transaction. This allows each transaction to be differentiate it from each other, but also ensure transactions are processed on the same order.\\n\\nNethereum calculates the Nonce automatically for all Transactions by retrieving the latest count of the transactions from the chain. Also internally manages at Account level an in memory counter on the nonces, to allow for situations in which we want to send multiple transactions before giving time to the Ethereum client to update its internal counter.\\n\\nNevertheless it might be scenarios, we want to supply our Nonce, for example if we want to sign the transaction completely offline.\\n\\n```csharp\\ntransfer.Nonce = 2;\\n```\\n\\n##### Signing a Function / Deployment message online / offline\\n\\nThe TransactionHandler also provides a mechanism to sign the Function and Deployments messages, provided we use an Account and/or ExternalAccount\\n\\n```csharp\\nvar signedTransaction = await transferHandler.SignTransactionAsync(ContractAddress, transfer);\\n```\\n\\nNethereum internally calls the Ethereum client to set the GasPrice, Nonce and estimate the Gas, so if want to sign the transaction for the contract completely offline we will need to set those values before hand.\\n\\n```csharp\\ntransfer.Nonce = 2;\\ntransfer.Gas = 21000;\\ntransfer.GasPrice =  Nethereum.Web3.Web3.Convert.ToWei(25, UnitConversion.EthUnit.Gwei);\\nvar signedTransaction = await transferHandler.SignTransactionAsync(ContractAddress, transfer);\\n```\\n\\n##### Extension methods for Functions and Deployment Messages\\n\\nThere are a number of extensions that can simplify the interaction with Function messages and Deployment messages.\\n\\nThese are under the namespace\\n\\n```csharp\\nusing Nethereum.Contracts.Extensions;\\n```\\n\\nSome of the extension methods are the following:\\n\\n**SetGasPriceFromGwei** which sets the GasPrice and converts it to Wei.\\n\\n**CreateCallInput** creates the call input which can be used to query or estimate transactions.\\n\\n**CreateTransactionInput** creates the transaction input which can be used to send or sign the raw transaction\\n\\n**DecodeInput** decodes the data of a transaction into a FunctionMessage\\n\\n**DecodeTransactionToFunctionMessage** decodes the full transaction into a FunctionMessage\\n\\n**GetCallData** returns the encoded call data with all the function and parameter information to be send to Ethereum\\n\\n**DecodeTransactionToDeploymentMessage** decodes the full transaction into DeploymentMessage\\n\\n**GetSwarmAddressFromByteCode** using the bytecode of a DeploymentMessage finds the swarm address included\\n\\nFor more support get in touch with our community:  https://gitter.im/Nethereum/Nethereum\\n\\n"}',
                            authorId:
                                '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                            dateCreated: '2019-04-24T16:12:13.045Z',
                            datePublished: '2019-04-24T16:12:24.396Z',
                            status: 'PUBLISHED',
                            attributes: {},
                            contentHash:
                                'QmSydezx29qnek9MTBk29bj4wXFyh3WqMbEq295UV996Zs',
                            checkpoint:
                                'Qma6YKVoeMeF9B2SGXqAyoksjNzgqzvbwwnrA6X4MhBJhH',
                            tags: ['smart-contract', 'dotnet', 'nethereum'],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                name: 'Gaël Blanchemain ',
                                username: 'anegg0',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/Qmcvvks7Wfuq9TuBpDWeRpGAs62BH9ecDj5z7DA7zAfkDb',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                name: 'Gaël Blanchemain ',
                                username: 'anegg0',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/Qmcvvks7Wfuq9TuBpDWeRpGAs62BH9ecDj5z7DA7zAfkDb',
                                resourceIdentifier: {
                                    id:
                                        '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                    name: 'Gaël Blanchemain ',
                                    username: 'anegg0',
                                    avatar:
                                        'https://api.kauri.io:443/ipfs/Qmcvvks7Wfuq9TuBpDWeRpGAs62BH9ecDj5z7DA7zAfkDb',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'feb122418c014c8bb7010063263d0a20',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 2,
                            },
                            description:
                                'The purpose of this article is to help .NET developers leverage Nethereum, An open source .NET integration library for blockchain. This document also exists as a Workbook , find more about workbooks installation requirements here Nethereum provides methods to sign messages in an Ethereum compatible format. The following is a quick guide to signing a string with Nethereum and verifying a signature using various methods. Ethereum signing basics In the Ethereum context, signing a message allows us',
                            id: 'feb122418c014c8bb7010063263d0a20',
                            version: 2,
                            title: 'Signing messages with Nethereum',
                            content:
                                '{"markdown":"\\n\\nThe purpose of this article is to help .NET developers leverage  [Nethereum](https://nethereum.com/), An open source .NET integration library for blockchain.\\n\\nThis document also exists as a [ Workbook ](https://github.com/Nethereum/Nethereum.Workbooks/blob/master/docs/nethereum-signing-messages.workbook), find more about workbooks installation requirements  [here](https://docs.microsoft.com/en-us/xamarin/tools/workbooks/install)\\n\\nNethereum provides methods to sign messages in an Ethereum compatible format. The following is a quick guide to signing a string with Nethereum and verifying a signature using various methods.\\n\\n## Ethereum signing basics\\n\\nIn the Ethereum context, signing a message allows us to verify that a piece of data was signed by a specific account, in other terms, it\'s a way to prove to a smart contract/human that an account approved a message.\\n\\nSigning a message with a private key does not require interacting with the Ethereum network. It can be done completely offline, hence the following code can be run without a testchain.\\n\\nNethereum provides with a class that can be used to sign or verify messages: `EthereumMessageSigner`.\\nLet\'s now explore how to use `EthereumMessageSigner` with two very common scenarios in the Ethereum context.\\n\\n## Signing messages and verifying signatures with Nethereum\\n\\nLet\'s first reference our assemblies and namespaces:\\n\\n```csharp\\n#r \\"Nethereum.Web3\\"\\n```\\n\\n```csharp\\n#r \\"Nethereum.ABI\\"\\n```\\n\\n```csharp\\nusing Nethereum.Web3;\\nusing Nethereum.Util;\\nusing System.Collections.Generic;\\nusing System.Text;\\nusing Nethereum.Signer;\\nusing Nethereum.Hex.HexConvertors.Extensions;\\nusing Nethereum.ABI.Encoders;\\n```\\n\\nNow let\'s declare elements that we will in every of our examples:\\n\\n**address** declares the signer\'s account address:\\n\\n```csharp\\nvar address = \\"0x12890d2cce102216644c59dae5baed380d84830c\\";\\n```\\n\\n**msg1** declares the content of the message itself, here is a simple string:\\n\\n```csharp\\nvar msg1 = \\"wee test message 18/09/2017 02:55PM\\";\\n```\\n\\n**privatekey** declares the private key of the signer’s **account**:\\n\\n```csharp\\nvar privateKey = \\"0xb5b1870957d373ef0eeffecc6e4812c0fd08f554b37b233526acc331bf1544f7\\";\\n```\\n\\n**signer1** creates an instance of the **EthereumMessageSigner** object:\\n\\n```csharp\\nvar signer1 = new EthereumMessageSigner();\\n```\\n\\n### 1-Encoding and signing a message using EncodeUTF8AndSign:\\n\\nThe most common scenario when signing a message goes as follows:\\n\\nA message needs to be signed, it\'s most likely a string and hence can be encoded in UTF8 and then signed, therefore we will use `EncodeUTF8AndSign`\\n\\n`EncodeUTF8AndSign` requires two arguments:\\n\\n* The message itself\\n\\n* The signing account\'s private key\\n\\n```csharp\\nvar signature1 = signer1.EncodeUTF8AndSign(msg1, new EthECKey(privateKey));\\n```\\n\\n### 2- Verifying a signed message encoded in UTF8 using EncodeUTF8AndEcRecover:\\n\\nThe Ethereum signature verification process is a bit different from classical digital signatures, here the output of a signature verification is not the message (or the message hash) but the signer\'s address, since the address is a part of the public key hash.\\nVerification is successful if the recovered address is equal to the provided address, which can only happen if the signer is the owner of the account\'s private key.\\n\\nIn this case the **EncodeUTF8AndEcRecover** method is used to verify the signer\'s address of a message encoded in UTF8:\\n\\n**addressRec1** evaluates to the signer\'s address, thus proving the validity of the message.\\n\\n```csharp\\nvar addressRec1 = signer1.EncodeUTF8AndEcRecover(msg1, signature1);\\n```\\n\\n### 3-Hashing and signing a message using **HashAndSign**:\\n\\nIn some cases, hashing data and then signing it might be more relevant, i.e. when dealing with a large file.\\n\\n**HashAndSign** enables you to do this in one go:\\n\\n```csharp\\nvar msg2 = \\"test\\";\\nvar signer2 = new EthereumMessageSigner();\\nvar signature2 = signer2.HashAndSign(msg2,\\n                \\"0xb5b1870957d373ef0eeffecc6e4812c0fd08f554b37b233526acc331bf1544f7\\");\\n```\\n\\n### 4-Verifying a hashed message using **HashAndEcRecover**:\\n\\nWhen receiving a signature that has been made with a hashed file it\'s necessary to start by hashing the file we want to verify and then recover the address that signed it.\\n\\n**HashAndEcRecover** enables you to do this in one single step:\\n\\n```csharp\\nvar addressRec2 = signer2.HashAndEcRecover(msg2, signature2);\\n```\\nFor more support get in touch with our community:  https://gitter.im/Nethereum/Nethereum\\n"}',
                            authorId:
                                '7b88584d0e6a608fa3a8716b0ca1620d61834a0c',
                            dateCreated: '2019-04-30T22:08:48.198Z',
                            datePublished: '2019-06-06T15:21:08.755Z',
                            status: 'PUBLISHED',
                            attributes: {},
                            contentHash:
                                'QmUWoti4Lr95GRAapp9HFuEnzmzozjA1CTNrSBF1GT5jV2',
                            checkpoint:
                                'QmdWth1LFV9sDU42AcKgPQFeCzSQTknbPRbA2WRmqmzCjH',
                            tags: [
                                'ethereum',
                                'encryption',
                                '-net',
                                'nethereum',
                                'tutorial',
                            ],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '7b88584d0e6a608fa3a8716b0ca1620d61834a0c',
                                name: 'Josh Cassidy',
                                username: 'joshorig',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/Qmd3QHscrkTvdgqcdCWyrLxhDwMKurTZh99eAsEDdpWti8',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                name: 'Gaël Blanchemain ',
                                username: 'anegg0',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/Qmcvvks7Wfuq9TuBpDWeRpGAs62BH9ecDj5z7DA7zAfkDb',
                                resourceIdentifier: {
                                    id:
                                        '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                    name: 'Gaël Blanchemain ',
                                    username: 'anegg0',
                                    avatar:
                                        'https://api.kauri.io:443/ipfs/Qmcvvks7Wfuq9TuBpDWeRpGAs62BH9ecDj5z7DA7zAfkDb',
                                    __typename: 'PublicUserDTO',
                                },
                                {
                                    id:
                                        '7b88584d0e6a608fa3a8716b0ca1620d61834a0c',
                                    name: 'Josh Cassidy',
                                    username: 'joshorig',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/Qmd3QHscrkTvdgqcdCWyrLxhDwMKurTZh99eAsEDdpWti8',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: null,
                            __typename: 'ArticleDTO',
                        },
                        {
                            associatedNfts: null,
                            resourceIdentifier: {
                                id: 'd7e05d0b1d2e4161a0118df91cb67b89',
                                type: 'ARTICLE',
                                __typename: 'ResourceIdentifier',
                                version: 2,
                            },
                            description:
                                'The purpose of this article is to help .NET developers leverage Nethereum, An open source .NET integration library for blockchain. This document also exists as a Workbook, find more about workbooks installation requirements here. What are nonces? The nonce is an important component of a transaction, it is an attribute of a an address that represents the number of transactions sent by that address. Nonces act as counters that keeps track of the number of transactions sent by an account. Nonces ha',
                            id: 'd7e05d0b1d2e4161a0118df91cb67b89',
                            version: 2,
                            title: 'Managing nonces with Nethereum',
                            content:
                                '{"markdown":"The purpose of this article is to help .NET developers leverage  [Nethereum](https://nethereum.com/), An open source .NET integration library for blockchain.\\n\\nThis document also exists as a [Workbook](https://github.com/Nethereum/Nethereum.Workbooks/blob/master/docs/nethereum-managing-nonces.workbook), find more about workbooks installation requirements  [here](https://docs.microsoft.com/en-us/xamarin/tools/workbooks/install).\\n\\n## What are nonces?\\n\\nThe nonce is an important component of a transaction, it is an attribute of a an address that represents the number of transactions sent by that address. Nonces act as counters that keeps track of the number of transactions sent  by an account.\\n\\nNonces have two functions:\\n1- Allowing to choose the order in which transactions will be executed.\\n2- Avoiding replay attacks.\\n\\nIn case 1, nonces enable to choose the order in which transactions will be executed by simply assigning nonces reflecting the order in which we want them processed (`0`for the first `1` for the second, etc...).\\nIn case 2, nonces prevent an attacker from copying one of our transactions and resending it until the account is drained (replay attack). Nonces make each transaction unique: there can only be one single transaction with a specific nonce, once it\'s confirmed it cannot be \\"replayed\\".\\n\\nFor more details on transactions and nonces, we recommend [this article](https://github.com/ethereumbook/ethereumbook/blob/develop/06transactions.asciidoc#the-transaction-nonce) (and more generally, the [Ethereum Book](https://github.com/ethereumbook/ethereumbook))\\n\\n## Common errors when working with nonces\\n\\nEach node will process transactions from a specific account in a strict order according to the value of its nonce, hence the nonce value needs to be incremented precisely.\\n\\nKeeping track of nonces is straightforward if all transactions originate from a single source/wallet handling the account, but things can get complicated if the account is managed by concurrent processes.\\nWhen several wallets handle transactions for the same account, duplicates and gaps can happen, resulting in transactions being cancelled or held off.\\n\\nErrors can also occur when Geth or Parity clients update their pending transactions queue too slowly.\\n\\nTwo main errors can occur with nonces:\\n\\nError 1/ Reusing nonce: if we send two transactions with the same nonce from the same account, one of the two will be rejected.\\n\\nError 2/ Gaps: if we leave a gap between the nonces that are attributed to two consecutive transactions, the last transaction will not be processed until this gap is closed.\\n\\nLet\'s take an example with a first transaction that would have nonce `123` and a second transaction with nonce `126`. In that example, the transaction with nonce `126` wouldn\'t be processed until transactions with nonces `124` and `125` are sent.\\n\\n## How Nethereum helps managing nonces\\n\\nNethereum simplifies nonce management thanks to the `NonceService`.\\nThe `NonceService` keeps track of pending transactions thus preventing the errors mentionned above the below demonstrates how to leverage it.\\n\\n## Prerequisites:\\n\\nIn order to run the code in this workbook, we recommended the following setup:\\nFirst, download the test chain matching your environment from <https://github.com/nethereum/testchains>\\n\\nStart a geth chain (geth-clique-linux\\\\\\\\, geth-clique-windows\\\\\\\\ or geth-clique-mac\\\\\\\\) using **startgeth.bat** (windows) or **startgeth.sh** (mac/linux). the chain is setup with the proof of authority consensus and will start the mining process immediately.\\n\\n```csharp\\n#r \\"nethereum.web3\\"\\n```\\n\\n```csharp\\n#r \\"nethereum.Accounts\\"\\n```\\n\\nThen we will need to add `using` statements:\\n\\n```csharp\\nusing Nethereum.Web3;\\nusing Nethereum.Web3.Accounts;\\nusing Nethereum.Web3.Accounts.Managed;\\nusing Nethereum.Signer;\\nusing Nethereum.Hex.HexConvertors.Extensions;\\nusing Nethereum.KeyStore;\\nusing Nethereum.Hex.HexConvertors;\\nusing Nethereum.Hex.HexTypes;\\nusing Nethereum.RPC.NonceServices;\\nusing Nethereum.RPC.TransactionReceipts;\\nusing System.Threading.Tasks;\\nusing Nethereum.RPC.Eth.Transactions;\\nusing Nethereum.RPC.Eth.DTOs;\\n```\\n\\n## Usage\\n\\nIn most cases, Nethereum takes care of incrementing the `nonce` automatically (unless you need to sign a raw transaction manually, we\'ll explain that in the next chapter).\\n\\nOnce you have loaded your private keys into your account, if Web3 is instantiated with that account, all the transactions will be made using the `TransactionManager`, Contract deployment or Functions will be signed offline using the latest nonce.\\n\\nExample:\\nThis example shows what happens to the `nonce` value when we send a transaction with a Nethereum account:\\n\\nWe first need to create an instance of an account, then use it to instantiate a `web3` object.\\n\\nLet\'s first declare our new `Account`:\\n\\n```csharp\\nvar privateKey = \\"0xb5b1870957d373ef0eeffecc6e4812c0fd08f554b37b233526acc331bf1544f7\\";\\nvar account = new Nethereum.Web3.Accounts.Account(privateKey);\\n```\\n\\n* `web3` is the Web3 instance using the new `account` as constructor\\n\\n```csharp\\nvar web3 = new Web3(account);\\n```\\n\\nWe can now create an instance of the NonceService that will help us keep track of transaction.\\\\\\nPlease note: when using the TransactionManager the NonceService is started automatically. The below is mostly for the sake of demontration.\\n\\n```csharp\\naccount.NonceService = new InMemoryNonceService(account.Address, web3.Client);\\n```\\n\\nLet\'s now examine what happens to the `nonce` value before and after we send a transaction:\\n\\n### Before a transaction is sent:\\n\\nThe `NonceService` keeps track of all transactions, including the ones still pending, making it easy to assign the right nonce to a transaction about to be sent.\\n\\nHere is how to return the current number of transaction for the `account` we declared earlier:\\n\\n```csharp\\nvar currentNonce = await web3.Eth.Transactions.GetTransactionCount.SendRequestAsync(account.Address, BlockParameter.CreatePending());\\n```\\n\\n`actualNonce` includes the total number of transactions including the pending transactions which have been submitted but are yet to be confirmed.\\n\\nIt is also possible to return the next nonce that needs to be assigned to a future transaction, this nonce will be determined by the \\\\`NonceService\\\\` using the current nonce plus the pending transactions sent by our account:\\n\\n```csharp\\nvar futureNonce = await account.NonceService.GetNextNonceAsync();\\n```\\n\\nNow, let\'s send a simple transaction, the right nonce will be automatically assigned to it by the `TransactionManager`:\\n\\n```csharp\\nvar recipientAddress = \\"0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae\\";\\nvar transaction = await web3.TransactionManager.SendTransactionAsync(account.Address, recipientAddress, new HexBigInteger(1));\\n```\\n\\n#### After a transaction has been sent\\n\\nFinally, using the NonceService, we can check if our transaction count has changed:\\n\\n```csharp\\ncurrentNonce = await web3.Eth.Transactions.GetTransactionCount.SendRequestAsync(account.Address, BlockParameter.CreatePending());\\n```\\n\\nAs the above code demonstrates, the `nonce` was automatically incremented, thanks to the use of `TransactionManager`.\\n\\n## Sending a transaction with an arbitrary nonce\\n\\nThere are scenarios where we might want to supply a Nonce manually, for example if we want to sign a transaction completely offline. Here is how to verify the number of transactions sent by an account:\\n\\nLet\'s first create an object instance of `TransactionSigner`\\n\\n```csharp\\nvar OfflineTransactionSigner = new TransactionSigner();\\n```\\n\\nWe can now declare a variable representing the next nonce for our upcoming transaction:\\n\\n```csharp\\nfutureNonce = await account.NonceService.GetNextNonceAsync();\\n```\\n\\nFinally, let’s sign our transaction offline:\\n\\n```csharp\\nvar encoded = OfflineTransactionSigner.SignTransaction(privateKey, recipientAddress, 10,futureNonce);\\n```\\n\\nAnd finally, send our transaction:\\n\\n```csharp\\nvar txId = await web3.Eth.Transactions.SendRawTransaction.SendRequestAsync(\\"0x\\" + encoded);\\n```\\n\\n\\nFor more support get in touch with our community:  https://gitter.im/Nethereum/Nethereum\\n"}',
                            authorId:
                                '9b66e2c73ee59c11ac25ef2730ab589c5416e81a',
                            dateCreated: '2019-06-05T07:25:18.318Z',
                            datePublished: '2019-06-06T14:47:44.237Z',
                            status: 'PUBLISHED',
                            attributes: {},
                            contentHash:
                                'QmWd7tbNZGVBYVTvTySUryEZmap3XysWaMuKvViXvzb5Ku',
                            checkpoint:
                                'QmdWth1LFV9sDU42AcKgPQFeCzSQTknbPRbA2WRmqmzCjH',
                            tags: [
                                'ethereum',
                                'nethereum',
                                'nonce',
                                'transaction',
                            ],
                            voteResult: {
                                sum: 0.0,
                                count: 0,
                                hasVoted: null,
                                quantity: {},
                                __typename: 'VoteResultDTO',
                            },
                            author: {
                                id: '9b66e2c73ee59c11ac25ef2730ab589c5416e81a',
                                name: 'Chris Ward',
                                username: 'ChrisChinchilla',
                                avatar:
                                    'https://api.beta.kauri.io:443/ipfs/Qmf3VwAmcivMAFzRoDJgzJ3hgrjAEKvDh3i7Lm8zAoQnw3',
                                __typename: 'PublicUserDTO',
                            },
                            owner: {
                                id: '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                name: 'Gaël Blanchemain ',
                                username: 'anegg0',
                                avatar:
                                    'https://api.kauri.io:443/ipfs/Qmcvvks7Wfuq9TuBpDWeRpGAs62BH9ecDj5z7DA7zAfkDb',
                                resourceIdentifier: {
                                    id:
                                        '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                    type: 'USER',
                                    __typename: 'ResourceIdentifier',
                                },
                                __typename: 'PublicUserDTO',
                            },
                            contributors: [
                                {
                                    id:
                                        '7a7b2502ff8d0fb68f40baba7ded01ca7fa7aa14',
                                    name: 'Gaël Blanchemain ',
                                    username: 'anegg0',
                                    avatar:
                                        'https://api.kauri.io:443/ipfs/Qmcvvks7Wfuq9TuBpDWeRpGAs62BH9ecDj5z7DA7zAfkDb',
                                    __typename: 'PublicUserDTO',
                                },
                                {
                                    id:
                                        '9b66e2c73ee59c11ac25ef2730ab589c5416e81a',
                                    name: 'Chris Ward',
                                    username: 'ChrisChinchilla',
                                    avatar:
                                        'https://api.beta.kauri.io:443/ipfs/Qmf3VwAmcivMAFzRoDJgzJ3hgrjAEKvDh3i7Lm8zAoQnw3',
                                    __typename: 'PublicUserDTO',
                                },
                            ],
                            comments: {
                                content: [],
                                totalPages: 0,
                                totalElements: 0,
                                __typename: 'ResponsePage_CommentDTO',
                            },
                            updateComment: 'Fixed broken link',
                            __typename: 'ArticleDTO',
                        },
                    ],
                    __typename: 'SectionDTO',
                },
            ],
            resourceIdentifier: {
                type: 'COLLECTION',
                id: '5cb55c871325f2000141df73',
                __typename: 'ResourceIdentifier',
            },
            __typename: 'CollectionDTO',
        },
    },
    dataPresent: true,
}
