import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FindLightestShapePage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Find Lightest Shape Tool</h1>
      <Card>
        <CardHeader>
          <CardTitle>Tool Description</CardTitle>
          <CardDescription>
            This tool helps determine the most weight-efficient structural shape for beams and columns based on given
            parameters.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="length">Length (m)</Label>
              <Input id="length" type="number" placeholder="Enter length" />
            </div>
            <div>
              <Label htmlFor="load">Load (kN)</Label>
              <Input id="load" type="number" placeholder="Enter load" />
            </div>
            <div>
              <Label htmlFor="material">Material</Label>
              <Input id="material" type="text" placeholder="Enter material (e.g., steel, concrete)" />
            </div>
            <Button type="submit">Calculate Lightest Shape</Button>
          </form>
          {/* Add result display logic here */}
        </CardContent>
      </Card>
    </div>
  )
}

