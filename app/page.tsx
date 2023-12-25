import {Snippet} from "@nextui-org/snippet";
import Tree from '@/ui/Tree'

export default function Home() {
  return (
    <div className="flex-grow flex flex-col justify-center items-center p-5 space-y-2">
      <Tree />
      <Snippet size="lg">git clone https://github.com/greengem/advent-of-code</Snippet>
    </div>
  )
}
