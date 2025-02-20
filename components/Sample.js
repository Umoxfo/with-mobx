import { useSampleStore } from "./SampleProvider"

const SampleComp = observer(() => {
    const { deps } = useSampleStore();

    return (
        <ul>
            {deps.entries().map([k, v] => <li key={k}>{v}</li>)}
        </ul>
    );
});

export default SampleComp;