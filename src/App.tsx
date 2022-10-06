import Heading from './components/heading';
import Button from './components/button';
import FormControl from './components/form-control';
import FormInput from './components/form-input';
import FormLabel from './components/form-label';
import FormHelperMessage from './components/form-helper-message';
import FormErrorMessage from './components/form-error-message';
import FormSelect from './components/form-select';
import FormTextarea from './components/form-textarea';
import FormRadio from './components/form-radio';
import FormCheckbox from './components/form-checkbox';
import FormRadioGroup from './components/form-radio-group';
import { useState } from 'react';
import FormCheckboxGroup from './components/form-checkbox-group';
import Badge from './components/badge';
import Table from './components/table';
import Thead from './components/thead';
import Tr from './components/tr';
import Th from './components/th';
import Tbody from './components/tbody';
import Td from './components/td';
import Switch from './components/switch';

function App() {
  const [radioGroup, setRadioGroup] = useState('oranges');
  const [checkboxGroup, setCheckboxGroup] = useState<string[]>([
    'apples',
    'oranges',
  ]);
  const [sw, setSw] = useState(false);

  const colors = [
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
  ];

  return (
    <div className={'p-12'}>
      <div className="space-y-8">
        <h1 className={'text-4xl'}>Typography</h1>

        <div className="space-y-4">
          <Heading>Heading 1</Heading>
          <Heading level={2}>Heading 2</Heading>
          <Heading level={3}>Heading 3</Heading>
          <Heading level={4}>Heading 4</Heading>
          <Heading level={5}>Heading 5</Heading>
          <Heading level={6}>Heading 6</Heading>
        </div>

        <h1 className={'text-4xl'}>Badges</h1>

        <div className={'flex space-x-2'}>
          <Badge>Default</Badge>
          <Badge variant={'outline'}>Outline</Badge>
          <Badge variant={'subtle'}>Subtle</Badge>
        </div>

        <h1 className={'text-4xl'}>Buttons</h1>

        <div className="space-y-4">
          {colors.flatMap(color =>
            [false, true].flatMap(loading => (
              <div
                key={`${color}-${loading}`}
                className="flex items-center space-x-4"
              >
                {(['solid', 'subtle', 'ghost', 'outline', 'link'] as const).map(
                  variant => (
                    <Button
                      key={`${color}-${loading}-${variant}`}
                      colorScheme={color}
                      loading={loading}
                      variant={variant}
                    >
                      {variant}
                    </Button>
                  ),
                )}
              </div>
            )),
          )}
        </div>

        <h1 className={'text-4xl'}>Tables</h1>

        <div>
          <Table className={'w-full'}>
            <Thead>
              <Tr>
                <Th>To Convert</Th>
                <Th>Into</Th>
                <Th>Multiply By</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres</Td>
                <Td>25.4</Td>
              </Tr>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres</Td>
                <Td>25.4</Td>
              </Tr>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres</Td>
                <Td>25.4</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>

        <h1 className={'text-4xl'}>Forms</h1>

        <div className="space-y-4">
          <FormControl>
            <FormLabel>Email</FormLabel>
            <FormInput />
            <FormHelperMessage>
              Make sure to include an @ sign
            </FormHelperMessage>
          </FormControl>
          <FormControl invalid={true}>
            <FormLabel>Password</FormLabel>
            <FormInput />
            <FormErrorMessage>Must be at least 8 characters</FormErrorMessage>
          </FormControl>
          <FormControl required={true}>
            <FormLabel>Serial Number</FormLabel>
            <FormInput />
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <FormSelect>
              <option value={'canada'}>Canada</option>
              <option value={'usa'}>USA</option>
              <option value={'zimbabwe'}>Zimbabwe</option>
            </FormSelect>
          </FormControl>
          <FormControl>
            <FormLabel>Bio</FormLabel>
            <FormTextarea />
          </FormControl>
          <div className={'flex flex-col space-y-1'}>
            <FormRadio>Apples</FormRadio>
            <FormRadio>Oranges</FormRadio>
            <FormRadio>Other</FormRadio>
          </div>
          <div className={'flex flex-col space-y-1'}>
            <FormRadioGroup value={radioGroup} onChange={setRadioGroup}>
              <FormRadio value={'apples'}>Apples</FormRadio>
              <FormRadio value={'oranges'}>Oranges</FormRadio>
              <FormRadio value={'other'}>Other</FormRadio>
            </FormRadioGroup>
          </div>
          <div className={'flex flex-col space-y-1'}>
            <FormCheckbox>Apples</FormCheckbox>
            <FormCheckbox>Oranges</FormCheckbox>
            <FormCheckbox>Other</FormCheckbox>
          </div>
          <div className={'flex flex-col space-y-1'}>
            <FormCheckboxGroup
              value={checkboxGroup}
              onChange={setCheckboxGroup}
            >
              <FormCheckbox value={'apples'}>Apples</FormCheckbox>
              <FormCheckbox value={'oranges'}>Oranges</FormCheckbox>
              <FormCheckbox value={'other'}>Other</FormCheckbox>
            </FormCheckboxGroup>
          </div>
          <div>
            <Switch checked={sw} onChange={setSw}>
              Enable
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
