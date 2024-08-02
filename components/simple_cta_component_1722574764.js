/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722574764", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex-1 min-h-screen">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-16 mx-auto lg:py-24 lg:px-6">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-xl">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white">Gain Powerful Blockchain Insights</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-medium text-pink-100 md:text-lg">Analyze and understand new blockchain data with our cutting-edge analytics tools.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-900 bg-pink-300 bg-opacity-70 hover:bg-opacity-90 focus:ring-4 focus:ring-pink-200 font-bold rounded-full text-lg px-8 py-3 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none">Start Analyzing Blockchain Data</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
