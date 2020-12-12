module App.Action {
    export type actionStatus = "defined" | "done" | "pending";

    export class ActionClass {
        private url: URL; //URL must support GraphQL with introspection query support
        private meaning: Map<URL, actionStatus>;

        public constructor(url: URL) {
            this.url = url;
            this.meaning = new Map();
        };

        public fetch(): Map<URL, actionStatus> {
            //fetch using this.url
            this.meaning.set(this.url, "pending");
            return this.meaning;
        };
    };

    export interface Action {
        actionStatus: actionStatus,
        action: ActionClass 
    };
};