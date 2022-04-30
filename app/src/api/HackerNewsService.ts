export default abstract class HackerNewsService{

    setTitlePrefix(prefix: string, title: string): string {
        return `[${prefix}] ${title}`;
    }

    abstract fetchList(): Promise<any>;
}